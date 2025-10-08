class Calculator:
    def _validate_and_cast(self, a, b):
        if isinstance(a, bool) or isinstance(b, bool):
            raise TypeError("Unsupported operand type: bool not allowed")
        try:
            a = float(a)
            b = float(b)
        except (TypeError, ValueError):
            raise TypeError("Unsupported operand type")
        return a, b

    def add(self, a, b):
        a, b = self._validate_and_cast(a, b)
        return a + b

    def subtract(self, a, b):
        a, b = self._validate_and_cast(a, b)
        return a - b

    def multiply(self, a, b):
        a, b = self._validate_and_cast(a, b)
        return a * b

    def divide(self, a, b):
        a, b = self._validate_and_cast(a, b)
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a / b