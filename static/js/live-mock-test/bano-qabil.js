/* ==========================================================================
   ExamPrep – Live Mock Test (Bano Qabil – Python Programming)
   Vanilla JS (ES6). Complete quiz state machine with real-time scoring.
   ========================================================================== */

(function () {
    'use strict';

    // Bano Qabil Python Programming MCQs – 50 Questions
    const quizData = {
        "test_name": "Bano Qabil – Python Programming Test",
        "based_on_syllabus": {
            "Python Basics": "30%",
            "Python Intermediate": "30%",
            "Python Advanced": "40%"
        },
        "total_questions": 50,
        "questions": [
            {
                "id": 1,
                "subject": "Python Basics",
                "question": "Which of the following is the correct way to create a virtual environment in Python?",
                "options": {
                    "A": "python virtual env myenv",
                    "B": "python -m venv myenv",
                    "C": "python create venv myenv",
                    "D": "virtualenv create myenv"
                },
                "answer": "B"
            },
            {
                "id": 2,
                "subject": "Python Basics",
                "question": "What will be the output of the following code?\nx = [1, 2, 3, 4, 5]\ny = x[::-1]\nprint(y)",
                "options": {
                    "A": "[1, 2, 3, 4, 5]",
                    "B": "[5, 4, 3, 2, 1]",
                    "C": "[None]",
                    "D": "Error"
                },
                "answer": "B"
            },
            {
                "id": 3,
                "subject": "Python Basics",
                "question": "Which Python library is commonly used for creating web applications?",
                "options": {
                    "A": "NumPy",
                    "B": "Pandas",
                    "C": "Django",
                    "D": "Matplotlib"
                },
                "answer": "C"
            },
            {
                "id": 4,
                "subject": "Python Basics",
                "question": "What is the correct syntax to define a class in Python?",
                "options": {
                    "A": "class MyClass:",
                    "B": "class MyClass {}",
                    "C": "class MyClass()",
                    "D": "class = MyClass"
                },
                "answer": "A"
            },
            {
                "id": 5,
                "subject": "Python Basics",
                "question": "Which of the following statements will raise an exception?",
                "options": {
                    "A": "x = int(\"123\")",
                    "B": "x = int(\"12.5\")",
                    "C": "x = int(\"100\")",
                    "D": "x = int(\"-50\")"
                },
                "answer": "B"
            },
            {
                "id": 6,
                "subject": "Python Basics",
                "question": "What does the open() function return when opening a file in Python?",
                "options": {
                    "A": "A string containing the file contents",
                    "B": "A file object",
                    "C": "A boolean value",
                    "D": "A list of file lines"
                },
                "answer": "B"
            },
            {
                "id": 7,
                "subject": "Python Basics",
                "question": "Which method is used to add an element to the end of a list?",
                "options": {
                    "A": "add()",
                    "B": "insert()",
                    "C": "append()",
                    "D": "extend()"
                },
                "answer": "C"
            },
            {
                "id": 8,
                "subject": "Python Basics",
                "question": "What is the output of the following code?\ndef func(x=5, y=10):\n    return x + y\nprint(func(y=20))",
                "options": {
                    "A": "15",
                    "B": "25",
                    "C": "30",
                    "D": "Error"
                },
                "answer": "B"
            },
            {
                "id": 9,
                "subject": "Python Basics",
                "question": "Which of the following is a mutable data type in Python?",
                "options": {
                    "A": "Tuple",
                    "B": "String",
                    "C": "Dictionary",
                    "D": "Integer"
                },
                "answer": "C"
            },
            {
                "id": 10,
                "subject": "Python Basics",
                "question": "What will be the output?\nx = \"Python\"\nprint(x[0:3])",
                "options": {
                    "A": "Pyt",
                    "B": "yth",
                    "C": "Pytho",
                    "D": "Python"
                },
                "answer": "A"
            },
            {
                "id": 11,
                "subject": "Python Basics",
                "question": "Which exception is raised when trying to divide by zero?",
                "options": {
                    "A": "ValueError",
                    "B": "ZeroDivisionError",
                    "C": "ArithmeticError",
                    "D": "OverflowError"
                },
                "answer": "B"
            },
            {
                "id": 12,
                "subject": "Python Basics",
                "question": "What does the isinstance() function do?",
                "options": {
                    "A": "Creates an instance of a class",
                    "B": "Checks if an object is an instance of a class",
                    "C": "Removes an instance from memory",
                    "D": "Prints the instance name"
                },
                "answer": "B"
            },
            {
                "id": 13,
                "subject": "Python Basics",
                "question": "Which of the following is the correct way to handle exceptions?",
                "options": {
                    "A": "try: except",
                    "B": "try: catch",
                    "C": "test: except",
                    "D": "attempt: except"
                },
                "answer": "A"
            },
            {
                "id": 14,
                "subject": "Python Basics",
                "question": "What is the purpose of the __init__() method in a class?",
                "options": {
                    "A": "To initialize object attributes",
                    "B": "To define the class name",
                    "C": "To define class methods",
                    "D": "To close the program"
                },
                "answer": "A"
            },
            {
                "id": 15,
                "subject": "Python Basics",
                "question": "Which import statement correctly imports Flask?",
                "options": {
                    "A": "import flask",
                    "B": "from flask import Flask",
                    "C": "Both A and B are correct",
                    "D": "Neither A nor B is correct"
                },
                "answer": "C"
            },
            {
                "id": 16,
                "subject": "Python Intermediate",
                "question": "What will be the output of the following code involving metaclasses?\nclass Meta(type):\n    def __new__(mcs, name, bases, dct):\n        dct['x'] = 10\n        return super().__new__(mcs, name, bases, dct)\nclass MyClass(metaclass=Meta):\n    pass\nprint(MyClass.x)",
                "options": {
                    "A": "AttributeError",
                    "B": "10",
                    "C": "None",
                    "D": "NameError"
                },
                "answer": "B"
            },
            {
                "id": 17,
                "subject": "Python Intermediate",
                "question": "Which of the following correctly implements the singleton pattern in Python?",
                "options": {
                    "A": "Using a class variable and checking in __init__()",
                    "B": "Using a metaclass to control instance creation",
                    "C": "Using a decorator that caches instances",
                    "D": "All of the above"
                },
                "answer": "D"
            },
            {
                "id": 18,
                "subject": "Python Intermediate",
                "question": "What is the output of the following code with multiple inheritance (Method Resolution Order)?\nclass A:\n    def method(self):\n        return 'A'\nclass B(A):\n    def method(self):\n        return 'B' + super().method()\nclass C(A):\n    def method(self):\n        return 'C' + super().method()\nclass D(B, C):\n    pass\nprint(D().method())",
                "options": {
                    "A": "BCBA",
                    "B": "BCA",
                    "C": "CBCA",
                    "D": "ABC"
                },
                "answer": "B"
            },
            {
                "id": 19,
                "subject": "Python Intermediate",
                "question": "What does the following code demonstrate about closures?\ndef outer(x):\n    def inner():\n        return x * 2\n    return inner\nf = outer(5)\nprint(f())",
                "options": {
                    "A": "Function cannot return another function",
                    "B": "Inner function captures the variable x from outer function scope",
                    "C": "x is garbage collected before inner() is called",
                    "D": "This code will raise a NameError"
                },
                "answer": "B"
            },
            {
                "id": 20,
                "subject": "Python Intermediate",
                "question": "What is the purpose of __slots__ in a Python class?",
                "options": {
                    "A": "To define class methods",
                    "B": "To optimize memory usage by restricting instance attributes",
                    "C": "To create static variables",
                    "D": "To implement abstract methods"
                },
                "answer": "B"
            },
            {
                "id": 21,
                "subject": "Python Intermediate",
                "question": "Which of the following correctly implements a property descriptor?",
                "options": {
                    "A": "Using @property decorator with getter and setter",
                    "B": "Implementing __get__(), __set__(), and __delete__()",
                    "C": "Both A and B are valid descriptor implementations",
                    "D": "Using __getattr__() and __setattr__()"
                },
                "answer": "C"
            },
            {
                "id": 22,
                "subject": "Python Intermediate",
                "question": "What will be printed from this asynchronous operation code?\nimport asyncio\nasync def func1():\n    await asyncio.sleep(0.1)\n    return 'Done'\nasync def main():\n    result = await func1()\n    print(result)\nasyncio.run(main())",
                "options": {
                    "A": "None",
                    "B": "Done",
                    "C": "RuntimeError",
                    "D": "NameError"
                },
                "answer": "B"
            },
            {
                "id": 23,
                "subject": "Python Intermediate",
                "question": "What is the issue in the following code involving circular references?\nclass Node:\n    def __init__(self, value):\n        self.value = value\n        self.parent = None\n        self.child = None\nparent = Node(1)\nchild = Node(2)\nparent.child = child\nchild.parent = parent",
                "options": {
                    "A": "No issue - Python's garbage collector handles circular references",
                    "B": "Memory leak due to circular reference",
                    "C": "Memory leak due to improper variable declaration",
                    "D": "Variables are automatically cleared by Python"
                },
                "answer": "A"
            },
            {
                "id": 24,
                "subject": "Python Intermediate",
                "question": "What is the correct way to implement context manager protocol?",
                "options": {
                    "A": "Implement __enter__() and __exit__() methods",
                    "B": "Use @contextmanager decorator with yield",
                    "C": "Both A and B are correct approaches",
                    "D": "Use with statement with any class"
                },
                "answer": "C"
            },
            {
                "id": 25,
                "subject": "Python Intermediate",
                "question": "What will be the output of the following code involving __new__() and __init__()?\nclass MyClass:\n    def __new__(cls):\n        print('new')\n        return super().__new__(cls)\n    def __init__(self):\n        print('init')\nMyClass()",
                "options": {
                    "A": "init new",
                    "B": "new init",
                    "C": "Only new",
                    "D": "Only init"
                },
                "answer": "B"
            },
            {
                "id": 26,
                "subject": "Python Intermediate",
                "question": "What does the functools.wraps decorator do?\nfrom functools import wraps\ndef my_decorator(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper",
                "options": {
                    "A": "It copies the metadata of the original function to the wrapper",
                    "B": "It prevents the wrapper from being called",
                    "C": "It forces the wrapper to return the same type as the original function",
                    "D": "It automatically generates documentation"
                },
                "answer": "A"
            },
            {
                "id": 27,
                "subject": "Python Intermediate",
                "question": "Which of the following is true about Python's Global Interpreter Lock (GIL)?",
                "options": {
                    "A": "It allows true parallel execution of threads",
                    "B": "It prevents multiple threads from executing Python bytecode simultaneously",
                    "C": "It only affects CPU-bound operations",
                    "D": "Both B and C are correct"
                },
                "answer": "D"
            },
            {
                "id": 28,
                "subject": "Python Intermediate",
                "question": "What is the output of the following advanced list comprehension with conditional?\nresult = [x**2 if x % 2 == 0 else x for x in range(5)]\nprint(result)",
                "options": {
                    "A": "[0, 1, 4, 3, 16]",
                    "B": "[0, 1, 4, 9, 16]",
                    "C": "[0, 2, 4, 6, 8]",
                    "D": "[1, 3, 5, 7, 9]"
                },
                "answer": "A"
            },
            {
                "id": 29,
                "subject": "Python Intermediate",
                "question": "What is the purpose of implementing __missing__() in a dictionary subclass?",
                "options": {
                    "A": "To handle missing values silently",
                    "B": "To raise an error when a key is not found",
                    "C": "To provide a default value when a key lookup fails",
                    "D": "To prevent modifications to the dictionary"
                },
                "answer": "C"
            },
            {
                "id": 30,
                "subject": "Python Intermediate",
                "question": "Which approach demonstrates proper abstraction using Abstract Base Classes (ABC)?\nfrom abc import ABC, abstractmethod\nclass Base(ABC):\n    @abstractmethod\n    def method(self):\n        pass",
                "options": {
                    "A": "Cannot instantiate Base class directly",
                    "B": "Subclasses must implement the abstract method",
                    "C": "Provides a contract for subclasses",
                    "D": "All of the above"
                },
                "answer": "D"
            },
            {
                "id": 31,
                "subject": "Python Advanced",
                "question": "What is the output of this decorator with arguments?\ndef repeat(n):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                func(*args, **kwargs)\n        return wrapper\n    return decorator\n@repeat(2)\ndef greet():\n    print('Hello')\ngreet()",
                "options": {
                    "A": "Hello (printed once)",
                    "B": "Hello\\nHello (printed twice)",
                    "C": "None (no output)",
                    "D": "Error: missing positional argument"
                },
                "answer": "B"
            },
            {
                "id": 32,
                "subject": "Python Advanced",
                "question": "What demonstrates proper use of __enter__() and __exit__()?\nclass FileManager:\n    def __init__(self, filename, mode):\n        self.filename = filename\n        self.mode = mode\n        self.file = None\n    def __enter__(self):\n        self.file = open(self.filename, self.mode)\n        return self.file\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if self.file:\n            self.file.close()\n        return False",
                "options": {
                    "A": "Resource is not properly managed",
                    "B": "File is automatically closed when exiting the with block",
                    "C": "__exit__() is never called",
                    "D": "File remains open after the block"
                },
                "answer": "B"
            },
            {
                "id": 33,
                "subject": "Python Advanced",
                "question": "What is the result of Method Resolution Order (MRO) in this case?\nclass A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass\nprint(D.mro())",
                "options": {
                    "A": "[D, B, C, A, object]",
                    "B": "[D, C, B, A, object]",
                    "C": "[D, A, B, C, object]",
                    "D": "[D, B, A, C, object]"
                },
                "answer": "A"
            },
            {
                "id": 34,
                "subject": "Python Advanced",
                "question": "What does this generator expression do?\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\ngen = fibonacci(5)\nprint(list(gen))",
                "options": {
                    "A": "[0, 1, 1, 2, 3]",
                    "B": "[0, 1, 2, 3, 5]",
                    "C": "[1, 1, 2, 3, 5]",
                    "D": "Generator object"
                },
                "answer": "A"
            },
            {
                "id": 35,
                "subject": "Python Advanced",
                "question": "What is the output of this closure with mutable default?\ndef make_multiplier(n):\n    def multiplier(x):\n        return x * n\n    return multiplier\ntimes3 = make_multiplier(3)\ntimes5 = make_multiplier(5)\nprint(times3(10), times5(10))",
                "options": {
                    "A": "30 50",
                    "B": "30 30",
                    "C": "50 50",
                    "D": "Error: n is not defined"
                },
                "answer": "A"
            },
            {
                "id": 36,
                "subject": "Python Advanced",
                "question": "What demonstrates proper use of *args and **kwargs?\ndef func(a, b, *args, **kwargs):\n    print(f'a={a}, b={b}, args={args}, kwargs={kwargs}')\nfunc(1, 2, 3, 4, x=5, y=6)",
                "options": {
                    "A": "a=1, b=2, args=(3, 4), kwargs={'x': 5, 'y': 6}",
                    "B": "Error: too many positional arguments",
                    "C": "a=1, b=2, args=(3, 4, 5, 6), kwargs={}",
                    "D": "Error: unexpected keyword arguments"
                },
                "answer": "A"
            },
            {
                "id": 37,
                "subject": "Python Advanced",
                "question": "What is the output of this property with setter?\nclass Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    @property\n    def celsius(self):\n        return self._celsius\n    @celsius.setter\n    def celsius(self, value):\n        if value < -273:\n            raise ValueError('Invalid temperature')\n        self._celsius = value\ntemp = Temperature(25)\ntemp.celsius = 30\nprint(temp.celsius)",
                "options": {
                    "A": "25",
                    "B": "30",
                    "C": "ValueError",
                    "D": "AttributeError"
                },
                "answer": "B"
            },
            {
                "id": 38,
                "subject": "Python Advanced",
                "question": "What does @staticmethod versus @classmethod do?\nclass MyClass:\n    value = 10\n    @staticmethod\n    def static_method():\n        return 'Static'\n    @classmethod\n    def class_method(cls):\n        return cls.value\nprint(MyClass.static_method(), MyClass.class_method())",
                "options": {
                    "A": "Both receive self as first argument",
                    "B": "staticmethod receives nothing, classmethod receives cls",
                    "C": "Both are identical in functionality",
                    "D": "staticmethod cannot access class variables"
                },
                "answer": "B"
            },
            {
                "id": 39,
                "subject": "Python Advanced",
                "question": "What is the purpose of __getattr__() and __getattribute__()?\nclass DynamicClass:\n    def __getattr__(self, name):\n        return f'Attribute {name} not found'\n    def __getattribute__(self, name):\n        return super().__getattribute__(name)\nobj = DynamicClass()\nprint(obj.existing_method)",
                "options": {
                    "A": "Attribute existing_method not found",
                    "B": "AttributeError",
                    "C": "None",
                    "D": "Both methods do the same thing"
                },
                "answer": "A"
            },
            {
                "id": 40,
                "subject": "Python Advanced",
                "question": "What demonstrates lazy evaluation in decorators?\ndef lazy_decorator(func):\n    print('Decorating')\n    def wrapper(*args, **kwargs):\n        print('Executing')\n        return func(*args, **kwargs)\n    return wrapper\n@lazy_decorator\ndef my_func():\n    print('Inside function')\nprint('After decoration')\nmy_func()",
                "options": {
                    "A": "Decorating\\nAfter decoration\\nExecuting\\nInside function",
                    "B": "Decorating\\nInside function\\nExecuting",
                    "C": "Executing\\nInside function",
                    "D": "After decoration\\nInside function"
                },
                "answer": "A"
            },
            {
                "id": 41,
                "subject": "Python Advanced",
                "question": "What is the output with data class comparison?\nfrom dataclasses import dataclass\n@dataclass\nclass Person:\n    name: str\n    age: int\np1 = Person('Alice', 30)\np2 = Person('Alice', 30)\nprint(p1 == p2)",
                "options": {
                    "A": "False (different objects)",
                    "B": "True (equal content)",
                    "C": "Error: Person is not comparable",
                    "D": "None"
                },
                "answer": "B"
            },
            {
                "id": 42,
                "subject": "Python Advanced",
                "question": "What does this demonstrate about variable scope?\nx = 10\ndef outer():\n    x = 20\n    def inner():\n        x = 30\n        print(x)\n    inner()\n    print(x)\nouter()\nprint(x)",
                "options": {
                    "A": "30\\n20\\n10",
                    "B": "30\\n30\\n30",
                    "C": "20\\n20\\n20",
                    "D": "Error: x is not defined"
                },
                "answer": "A"
            },
            {
                "id": 43,
                "subject": "Python Advanced",
                "question": "What is the result of using __call__() on a class?\nclass Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    def __call__(self, x):\n        return x * self.factor\ntriple = Multiplier(3)\nprint(triple(5))",
                "options": {
                    "A": "5 (only stores factor)",
                    "B": "15 (calls __call__ method)",
                    "C": "Error: Multiplier object is not callable",
                    "D": "3"
                },
                "answer": "B"
            },
            {
                "id": 44,
                "subject": "Python Advanced",
                "question": "What demonstrates proper use of @lru_cache decorator?\nfrom functools import lru_cache\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\nprint(fibonacci(5))",
                "options": {
                    "A": "5 (correct value)",
                    "B": "Error: recursive limit exceeded",
                    "C": "None",
                    "D": "Caches previous results for performance"
                },
                "answer": "A"
            },
            {
                "id": 45,
                "subject": "Python Advanced",
                "question": "What is the output of this super() usage?\nclass Parent:\n    def method(self):\n        return 'Parent'\nclass Child(Parent):\n    def method(self):\n        return super().method() + ' and Child'\nc = Child()\nprint(c.method())",
                "options": {
                    "A": "Parent and Child",
                    "B": "Child",
                    "C": "Parent",
                    "D": "Error: super() requires arguments"
                },
                "answer": "A"
            },
            {
                "id": 46,
                "subject": "Python Advanced",
                "question": "What demonstrates proper type hints?\nfrom typing import List, Dict, Optional\ndef process_data(items: List[int], mapping: Dict[str, int]) -> Optional[int]:\n    if not items:\n        return None\n    return sum(items)\nresult = process_data([1, 2, 3], {'key': 1})\nprint(result)",
                "options": {
                    "A": "6 (correct sum)",
                    "B": "Error: incorrect types",
                    "C": "Type hints are only for documentation",
                    "D": "Type hints enforce type checking at runtime"
                },
                "answer": "A"
            },
            {
                "id": 47,
                "subject": "Python Advanced",
                "question": "What is the output of chained method calls?\nclass Calculator:\n    def __init__(self, value=0):\n        self.value = value\n    def add(self, n):\n        self.value += n\n        return self\n    def multiply(self, n):\n        self.value *= n\n        return self\n    def get_result(self):\n        return self.value\nresult = Calculator(5).add(3).multiply(2).get_result()\nprint(result)",
                "options": {
                    "A": "5",
                    "B": "16",
                    "C": "Error: method chaining not supported",
                    "D": "10"
                },
                "answer": "B"
            },
            {
                "id": 48,
                "subject": "Python Advanced",
                "question": "What demonstrates the Iterator protocol?\nclass CountUp:\n    def __init__(self, max):\n        self.max = max\n        self.current = 0\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.current < self.max:\n            self.current += 1\n            return self.current\n        raise StopIteration\nfor num in CountUp(3):\n    print(num, end=' ')",
                "options": {
                    "A": "1 2 3",
                    "B": "0 1 2",
                    "C": "Error: StopIteration not handled",
                    "D": "Nothing (infinite loop)"
                },
                "answer": "A"
            },
            {
                "id": 49,
                "subject": "Python Advanced",
                "question": "What is the output with multiple decorators?\ndef decorator1(func):\n    def wrapper(*args, **kwargs):\n        print('D1 before')\n        result = func(*args, **kwargs)\n        print('D1 after')\n        return result\n    return wrapper\ndef decorator2(func):\n    def wrapper(*args, **kwargs):\n        print('D2 before')\n        result = func(*args, **kwargs)\n        print('D2 after')\n        return result\n    return wrapper\n@decorator1\n@decorator2\ndef my_func():\n    print('Function')\nmy_func()",
                "options": {
                    "A": "D1 before\\nD2 before\\nFunction\\nD2 after\\nD1 after",
                    "B": "D2 before\\nD1 before\\nFunction\\nD1 after\\nD2 after",
                    "C": "D1 before\\nD1 after\\nD2 before\\nD2 after",
                    "D": "Function (decorators ignored)"
                },
                "answer": "A"
            },
            {
                "id": 50,
                "subject": "Python Advanced",
                "question": "What demonstrates proper handling of custom exceptions?\nclass CustomError(Exception):\n    def __init__(self, message, code):\n        self.message = message\n        self.code = code\n        super().__init__(self.message)\ntry:\n    raise CustomError('Invalid input', 400)\nexcept CustomError as e:\n    print(f'Error {e.code}: {e.message}')",
                "options": {
                    "A": "Error 400: Invalid input",
                    "B": "Error: Invalid input",
                    "C": "CustomError: Invalid input",
                    "D": "AttributeError: code not defined"
                },
                "answer": "A"
            }
        ]
    };

    let currentQuestionIndex = 0;
    const userAnswers = {}; // key: question.id, value: selected option ('A', 'B', 'C', 'D')
    const flaggedQuestions = new Set(); // set of question indices
    let submittedDueToTimeout = false;
    let quizStarted = false;

    /* ------------------------------ Timer Logic ---------------------------- */
    const TimerModule = (function () {
        let timeLeft = 3600; // 60 minutes in seconds
        let timerInterval = null;
        let countdownEl = null;

        function formatTime(totalSeconds) {
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            return [hours, minutes, seconds]
                .map((unit) => String(unit).padStart(2, '0'))
                .join(':');
        }

        function tick() {
            if (!countdownEl) return;
            countdownEl.textContent = formatTime(timeLeft);

            if (timeLeft > 0) {
                timeLeft -= 1;
            } else {
                clearInterval(timerInterval);
                countdownEl.classList.add('text-error');
                submittedDueToTimeout = true;
                submitExamResults();
            }
        }

        function init() {
            countdownEl = document.getElementById('countdown');
            if (!countdownEl) return;

            // Start 10-second prepare countdown first
            let prepTime = 10;
            const prepValEl = document.getElementById('prep-countdown-val');
            const overlay = document.getElementById('prep-overlay');

            if (prepValEl) prepValEl.textContent = prepTime;

            let prepInterval = setInterval(() => {
                prepTime -= 1;
                if (prepValEl) prepValEl.textContent = prepTime;

                if (prepTime <= 0) {
                    clearInterval(prepInterval);
                    if (overlay) {
                        overlay.classList.add('fade-out');
                    }
                    quizStarted = true;
                    // Start actual test countdown
                    tick();
                    timerInterval = setInterval(tick, 1000);
                }
            }, 1000);
        }

        return { init };
    }());

    /* --------------------------- Palette Module --------------------------- */
    const PaletteModule = (function () {
        function createButton(index) {
            const btn = document.createElement('button');
            const label = (index + 1) < 10 ? `0${index + 1}` : `${index + 1}`;
            btn.type = 'button';
            btn.className = 'palette-btn is-not-visited';
            btn.id = `palette-btn-${index}`;
            btn.setAttribute('data-question-index', String(index));
            btn.setAttribute('aria-label', `Question ${index + 1}`);
            btn.textContent = label;

            btn.addEventListener('click', () => {
                currentQuestionIndex = index;
                renderCurrentQuestion();
            });

            return btn;
        }

        function init() {
            const container = document.getElementById('question-palette');
            if (!container) return;
            container.innerHTML = '';

            const fragment = document.createDocumentFragment();
            for (let i = 0; i < quizData.questions.length; i += 1) {
                fragment.appendChild(createButton(i));
            }
            container.appendChild(fragment);
        }

        return { init };
    }());

    /* -------------------------- Render Question -------------------------- */
    function renderCurrentQuestion() {
        const q = quizData.questions[currentQuestionIndex];
        if (!q) return;

        // Update exam headers
        const titleEl = document.querySelector('.exam-title');
        if (titleEl) titleEl.textContent = quizData.test_name;

        const subtitleEl = document.querySelector('.exam-subtitle');
        if (subtitleEl) {
            subtitleEl.innerHTML = `
                <span class="material-symbols-outlined">history_edu</span>
                Syllabus: Basics 30%, Intermediate 30%, Advanced 40%
            `;
        }

        // Meta rows
        const eyebrow = document.querySelector('.question-eyebrow');
        if (eyebrow) eyebrow.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.total_questions}`;

        const tagRow = document.querySelector('.tag-row');
        if (tagRow) {
            tagRow.innerHTML = `
                <span class="tag-chip">${q.subject}</span>
                <span class="tag-chip tag-hard">1.0 Mark</span>
            `;
        }

        // Question text (preserve newlines for code snippets)
        const qText = document.querySelector('.question-text');
        if (qText) {
            qText.innerHTML = q.question.replace(/\n/g, '<br>');
        }

        // Hide illustration (since these are programming questions)
        const qIllust = document.querySelector('.question-illustration');
        if (qIllust) qIllust.style.display = 'none';

        // Render options list
        const answerList = document.querySelector('.answer-list');
        if (answerList) {
            answerList.innerHTML = '';
            Object.entries(q.options).forEach(([key, value]) => {
                const isSelected = userAnswers[q.id] === key;
                const optionLabel = document.createElement('label');
                optionLabel.className = `answer-option ${isSelected ? 'is-selected' : ''}`;

                optionLabel.innerHTML = `
                    <input class="answer-radio" type="radio" name="question_${q.id}" value="${key}" ${isSelected ? 'checked' : ''}>
                    <div class="answer-body">
                        <span>${value}</span>
                    </div>
                    <span class="answer-letter">${key}</span>
                `;

                const radio = optionLabel.querySelector('.answer-radio');
                radio.addEventListener('change', () => {
                    userAnswers[q.id] = key;
                    answerList.querySelectorAll('.answer-option').forEach(opt => opt.classList.remove('is-selected'));
                    optionLabel.classList.add('is-selected');
                    updateProgressAndPalette();
                });

                optionLabel.addEventListener('click', (e) => {
                    if (e.target !== radio) {
                        radio.checked = true;
                        radio.dispatchEvent(new Event('change'));
                    }
                });

                answerList.appendChild(optionLabel);
            });
        }

        // Update overall palette active styles
        updateProgressAndPalette();
    }

    function isQuestionLocked(index) {
        const allAnswered = quizData.questions.every(q => !!userAnswers[q.id]);
        if (allAnswered) {
            // Phase 2: Review mode. Only flagged questions are unlocked!
            return !flaggedQuestions.has(index) && index !== currentQuestionIndex;
        } else {
            // Phase 1: Sequential mode. Only the current active question is unlocked!
            return index !== currentQuestionIndex;
        }
    }

    function updateProgressAndPalette() {
        const total = quizData.questions.length;
        const answeredCount = Object.keys(userAnswers).length;

        // Update progress displays
        const widthVal = `${(answeredCount / total) * 100}%`;
        const headerProgress = document.getElementById('header-progress-bar');
        const footerProgress = document.getElementById('footer-progress-bar');
        if (headerProgress) headerProgress.style.width = widthVal;
        if (footerProgress) footerProgress.style.width = widthVal;

        // Update palette buttons styles
        for (let index = 0; index < total; index += 1) {
            const btn = document.getElementById(`palette-btn-${index}`);
            if (!btn) continue;

            const q = quizData.questions[index];
            const label = (index + 1) < 10 ? `0${index + 1}` : `${index + 1}`;

            // Reset classes
            btn.className = 'palette-btn';

            const locked = isQuestionLocked(index);
            if (locked) {
                btn.classList.add('is-locked');
                btn.textContent = label;
                btn.style.pointerEvents = 'none';
                btn.style.opacity = '0.35';
            } else {
                btn.style.pointerEvents = 'auto';
                btn.style.opacity = '1';

                if (index === currentQuestionIndex) {
                    btn.classList.add('is-current');
                }

                if (flaggedQuestions.has(index)) {
                    btn.classList.add('is-flagged');
                    btn.innerHTML = `${label}<span class="flag-badge"><span class="material-symbols-outlined fill">flag</span></span>`;
                } else if (userAnswers[q.id]) {
                    btn.classList.add('is-answered');
                    btn.textContent = label;
                } else {
                    btn.classList.add('is-not-visited');
                    btn.textContent = label;
                }
            }
        }
    }

    /* ---------------------------- Scoring & Submission -------------------------- */
    function submitExamResults() {
        let correctCount = 0;
        quizData.questions.forEach((q) => {
            if (userAnswers[q.id] === q.answer) {
                correctCount += 1;
            }
        });

        const score = correctCount;
        const percentage = ((score / quizData.total_questions) * 100).toFixed(0);
        const passed = score >= 25 && !submittedDueToTimeout; // 50% pass mark

        const modalContent = document.getElementById('modal-content');
        if (modalContent) {
            let titleText = passed ? 'Congratulations!' : 'Exam Finished';
            let statusText = passed ? 'PASSED' : 'FAILED';
            let descText = `You scored <strong>${score} out of ${quizData.total_questions}</strong> (${percentage}%).`;
            let iconText = passed ? 'check_circle' : 'cancel';

            if (submittedDueToTimeout) {
                titleText = 'Time Out!';
                statusText = 'FAILED';
                descText = 'You failed because of time limit. You ran out of time.';
                iconText = 'alarm_off';
            }

            modalContent.innerHTML = `
                <div class="text-center">
                    <div class="modal-icon-wrap" style="background-color: ${passed ? 'rgba(0, 108, 73, 0.1)' : 'rgba(186, 26, 26, 0.1)'}">
                        <span class="material-symbols-outlined" style="color: ${passed ? 'var(--color-secondary)' : 'var(--color-error)'}">
                            ${iconText}
                        </span>
                    </div>
                    <h2 class="modal-title">${titleText}</h2>
                    <p class="modal-text">${descText}<br>
                    Status: <strong style="color: ${passed ? 'var(--color-secondary)' : 'var(--color-error)'}">${statusText}</strong></p>
                    <div class="modal-btn-row">
                        <button type="button" class="btn-modal btn-modal-primary" id="modal-dashboard-btn" style="flex: 1 1 100%;">
                            Go to Dashboard
                        </button>
                    </div>
                </div>
            `;

            // Make sure modal is visible
            const modal = document.getElementById('submit-modal');
            if (modal) {
                modal.classList.remove('d-none');
                modalContent.classList.add('is-visible');
            }

            const dashboardBtn = document.getElementById('modal-dashboard-btn');
            if (dashboardBtn) {
                dashboardBtn.addEventListener('click', () => {
                    window.location.href = '/dashboard/';
                });
            }
        }
    }

    /* ----------------------------- Modal Module -------------------------------- */
    const ModalModule = (function () {
        let modal = null;
        let content = null;

        function open() {
            if (!modal || !content) return;

            // Render unanswered warnings inside confirmation modal before submitting
            const total = quizData.total_questions;
            const answeredCount = Object.keys(userAnswers).length;

            const modalText = modal.querySelector('.modal-text');
            if (modalText) {
                modalText.innerHTML = `You have answered <strong>${answeredCount} out of ${total}</strong> questions.<br>Are you sure you want to finish the test?`;
            }

            modal.classList.remove('d-none');
            window.setTimeout(() => {
                content.classList.add('is-visible');
            }, 10);
        }

        function close() {
            if (!modal || !content) return;
            content.classList.remove('is-visible');
            window.setTimeout(() => {
                modal.classList.add('d-none');
            }, 300);
        }

        function init() {
            modal = document.getElementById('submit-modal');
            content = document.getElementById('modal-content');

            const finishBtn = document.getElementById('finish-test-btn');
            const goBackBtn = document.getElementById('modal-go-back-btn');
            const submitBtn = modal ? modal.querySelector('.btn-modal-primary') : null;

            if (finishBtn) finishBtn.addEventListener('click', open);
            if (goBackBtn) goBackBtn.addEventListener('click', close);
            if (submitBtn) {
                submitBtn.addEventListener('click', () => {
                    submitExamResults();
                });
            }
        }

        return { init, open, close };
    }());

    function getNextReviewQuestionIndex(startIndex) {
        const total = quizData.questions.length;
        for (let i = startIndex + 1; i < total; i += 1) {
            if (flaggedQuestions.has(i)) {
                return i;
            }
        }
        return -1;
    }

    /* --------------------------- Actions Bindings --------------------------- */
    function initActionBindings() {
        const flagBtn = document.getElementById('flag-btn');
        const saveNextBtn = document.getElementById('save-next-btn');

        if (flagBtn) {
            flagBtn.addEventListener('click', () => {
                if (flaggedQuestions.has(currentQuestionIndex)) {
                    flaggedQuestions.delete(currentQuestionIndex);
                } else {
                    flaggedQuestions.add(currentQuestionIndex);
                }
                updateProgressAndPalette();
            });
        }

        if (saveNextBtn) {
            saveNextBtn.addEventListener('click', () => {
                const allAnswered = quizData.questions.every(q => !!userAnswers[q.id]);
                if (allAnswered) {
                    const nextIndex = getNextReviewQuestionIndex(currentQuestionIndex);
                    if (nextIndex !== -1) {
                        currentQuestionIndex = nextIndex;
                        renderCurrentQuestion();
                    } else {
                        ModalModule.open();
                    }
                } else {
                    const currentQ = quizData.questions[currentQuestionIndex];
                    if (!userAnswers[currentQ.id]) {
                        alert("Please answer the current question to unlock the next one.");
                        return;
                    }
                    if (currentQuestionIndex < quizData.questions.length - 1) {
                        currentQuestionIndex += 1;
                        renderCurrentQuestion();

                        const nowAllAnswered = quizData.questions.every(q => !!userAnswers[q.id]);
                        if (nowAllAnswered) {
                            alert("Great job! You have answered all questions. You can now review your flagged questions from the sidebar navigator, or click Finish to submit your test.");
                        }
                    } else {
                        ModalModule.open();
                    }
                }
            });
        }
    }

    /* ------------------------------ Keyboard Nav -------------------------------- */
    const KeyboardNavModule = (function () {
        function handleKeydown(event) {
            if (!quizStarted) return;
            if (event.key === 'ArrowRight') {
                const allAnswered = quizData.questions.every(q => !!userAnswers[q.id]);
                if (allAnswered) {
                    const nextIndex = getNextReviewQuestionIndex(currentQuestionIndex);
                    if (nextIndex !== -1) {
                        currentQuestionIndex = nextIndex;
                        renderCurrentQuestion();
                    }
                } else {
                    const currentQ = quizData.questions[currentQuestionIndex];
                    if (!userAnswers[currentQ.id]) {
                        alert("Please answer the current question to unlock the next one.");
                        return;
                    }
                    if (currentQuestionIndex < quizData.questions.length - 1) {
                        currentQuestionIndex += 1;
                        renderCurrentQuestion();

                        const nowAllAnswered = quizData.questions.every(q => !!userAnswers[q.id]);
                        if (nowAllAnswered) {
                            alert("Great job! You have answered all questions. You can now review your flagged questions from the sidebar navigator, or click Finish to submit your test.");
                        }
                    }
                }
            }
        }

        function init() {
            document.addEventListener('keydown', handleKeydown);
        }

        return { init };
    }());

    /* ------------------------------ Sidebar Toggle ------------------------------ */
    function initSidebarToggle() {
        const closeBtn = document.getElementById('sidebar-close-btn');
        if (!closeBtn) return;

        const icon = closeBtn.querySelector('.material-symbols-outlined');

        function updateIcon() {
            if (!icon) return;
            const isCollapsed = document.body.classList.contains('sidebar-collapsed');
            if (window.innerWidth >= 768) {
                icon.textContent = isCollapsed ? 'chevron_right' : 'chevron_left';
            } else {
                icon.textContent = isCollapsed ? 'expand_more' : 'expand_less';
            }
        }

        closeBtn.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-collapsed');
            updateIcon();
        });

        window.addEventListener('resize', updateIcon);
        updateIcon();
    }

    /* -------------------------- Fullscreen & Dark Mode & Clear Answer -------------------------- */
    function initFullScreenToggle() {
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        if (!fullscreenBtn) return;

        const icon = fullscreenBtn.querySelector('.material-symbols-outlined');

        function updateIcon() {
            if (!icon) return;
            if (document.fullscreenElement) {
                icon.textContent = 'fullscreen_exit';
            } else {
                icon.textContent = 'fullscreen';
            }
        }

        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen()
                    .then(updateIcon)
                    .catch((err) => {
                        console.error(`Error attempting to enable fullscreen: ${err.message}`);
                    });
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen().then(updateIcon);
                }
            }
        });

        document.addEventListener('fullscreenchange', updateIcon);
    }

    function initDarkModeToggle() {
        const darkmodeBtn = document.getElementById('darkmode-btn');
        const icon = document.getElementById('dark-mode-icon');
        if (!darkmodeBtn) return;

        // Persist theme choice using localStorage
        const savedTheme = localStorage.getItem('theme') || document.documentElement.getAttribute('data-bs-theme') || 'light';
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
        if (icon) icon.textContent = savedTheme === 'dark' ? 'dark_mode' : 'light_mode';

        darkmodeBtn.addEventListener('click', () => {
            const html = document.documentElement;
            const targetTheme = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-bs-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            if (icon) {
                icon.textContent = targetTheme === 'dark' ? 'dark_mode' : 'light_mode';
            }
        });
    }

    /* ---------------------------------- Boot ------------------------------------- */
    document.addEventListener('DOMContentLoaded', () => {
        TimerModule.init();
        PaletteModule.init();
        renderCurrentQuestion();
        ModalModule.init();
        initActionBindings();
        initSidebarToggle();
        initFullScreenToggle();
        initDarkModeToggle();
        KeyboardNavModule.init();
    });
}());
