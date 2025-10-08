const test = require('node:test');
const assert = require('assert');
const fs = require('fs');

const originalReadFile = fs.readFile;
fs.readFile = (path, encoding, callback) => {
  callback(null, 'Alice\nBob\nCharlie');
};

const { Application, MailSystem } = require('./main');

test('MailSystem.write should return correct message', () => {
  const ms = new MailSystem();
  const output = ms.write('Alice');
  assert.strictEqual(output, 'Congrats, Alice!');
});

test('MailSystem.send should return true when Math.random > 0.5', () => {
  const ms = new MailSystem();
  const orig = Math.random;
  Math.random = () => 0.9;
  assert.strictEqual(ms.send('Bob','context'), true);
  Math.random = orig;
});

test('MailSystem.send should return false when Math.random <= 0.5', () => {
  const ms = new MailSystem();
  const orig = Math.random;
  Math.random = () => 0.1;
  assert.strictEqual(ms.send('Bob','context'), false);
  Math.random = orig;
});

test('Application.getNames should read and parse names correctly', async () => {
  const app = new Application();
  const [people, selected] = await app.getNames();
  assert.deepStrictEqual(people, ['Alice','Bob','Charlie']);
  assert.deepStrictEqual(selected, []);
});

test('Application.selectNextPerson selects unique people and stops when all selected', () => {
  const app = new Application();
  app.people = ['Alice','Bob'];
  app.selected = [];
  const p1 = app.selectNextPerson();
  const p2 = app.selectNextPerson();
  assert.ok(['Alice','Bob'].includes(p1));
  assert.ok(['Alice','Bob'].includes(p2));
  assert.notStrictEqual(p1, p2);
  assert.strictEqual(app.selectNextPerson(), null);
});

test('Application.selectNextPerson triggers while loop when random picks already-selected person', () => {
  const app = new Application();
  app.people = ['Alice', 'Bob'];
  app.selected = ['Alice'];
  let first = true;

  app.getRandomPerson = () => {
    if (first) { first = false; return 'Alice'; }
    return 'Bob';
  };
  const p = app.selectNextPerson();
  assert.strictEqual(p, 'Bob');  
  assert.deepStrictEqual(app.selected.sort(), ['Alice','Bob']);
});


test('Application.notifySelected should call MailSystem.write and send for each selected', () => {
  const app = new Application();
  app.selected = ['Alice','Bob'];
  let calledWrite = [];
  let calledSend = [];
  app.mailSystem.write = (name) => { calledWrite.push(name); return 'msg'; };
  app.mailSystem.send = (name, msg) => { calledSend.push(name); return true; };
  app.notifySelected();
  assert.deepStrictEqual(calledWrite, ['Alice','Bob']);
  assert.deepStrictEqual(calledSend, ['Alice','Bob']);
});

test.after(() => {
  fs.readFile = originalReadFile;
});
