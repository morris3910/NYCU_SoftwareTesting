def validate_operands(func):
    def wrapper(self, a, b):
        if isinstance(a, bool) or isinstance(b, bool):
            raise TypeError("Unsupported operand type: bool not allowed")
        try:
            a = float(a)
            b = float(b)
        except (TypeError, ValueError):
            raise TypeError("Unsupported operand type")
        if func.__name__ == "divide" and b == 0:
            raise ValueError("Cannot divide by zero")
        return func(self, a, b)
    return wrapper


class Calculator:
    @validate_operands
    def add(self, a, b):
        return a + b

    @validate_operands
    def subtract(self, a, b):
        return a - b

    @validate_operands
    def multiply(self, a, b):
        return a * b

    @validate_operands
    def divide(self, a, b):
        return a / b
