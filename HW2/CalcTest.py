import unittest
from Calc import Calculator  # The class we are going to implement

class TestCalculator(unittest.TestCase):
    def setUp(self):
        self.calc = Calculator()

    # === add() ===
    def test_add(self):
        self.assertEqual(self.calc.add(2, 3), 5)
        self.assertEqual(self.calc.add(-2, -5), -7)
        self.assertEqual(self.calc.add(-2, 3), 1)
        self.assertEqual(self.calc.add(2, 3.5), 5.5)
        self.assertEqual(self.calc.add(2.2, 0.8), 3.0)

    # === subtract() ===
    def test_subtract(self):
        self.assertEqual(self.calc.subtract(10, 3), 7)
        self.assertEqual(self.calc.subtract(-5, -2), -3)
        self.assertEqual(self.calc.subtract(5, -2), 7)
        self.assertEqual(self.calc.subtract(10, 2.5), 7.5)
        self.assertEqual(self.calc.subtract(2.5, 10), -7.5)

    # === multiply() ===
    def test_multiply_positive(self):
        self.assertEqual(self.calc.multiply(3, 4), 12)
        self.assertEqual(self.calc.multiply(-3, 4), -12)
        self.assertEqual(self.calc.multiply(10, 0), 0)
        self.assertEqual(self.calc.multiply(2.5, 2), 5.0)

    # === divide() ===
    def test_divide_positive(self):
        self.assertEqual(self.calc.divide(10, 2), 5.0)
        self.assertEqual(self.calc.divide(-10, 2), -5.0)
        self.assertEqual(self.calc.divide(7, 2), 3.5)
        self.assertIsInstance(self.calc.divide(7, 2), float)
        with self.assertRaises(ValueError):
            self.calc.divide(5, 0)

    # === Error handling ===
    def test_invalid_operand_type(self):
        with self.assertRaises(TypeError):
            self.calc.add("abc", 3)

        with self.assertRaises(TypeError):
            self.calc.multiply(5, None)

        with self.assertRaises(TypeError):
            self.calc.divide(True, 2)

if __name__ == "__main__":
    unittest.main(verbosity=2)