# 6. Number to String 

# Func
def numToStr(num):
    return str(num)


# Test 

@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(number_to_string(67), '67')
        test.assert_equals(number_to_string(79585), '79585')
        test.assert_equals(number_to_string(-79585), '-79585')
        test.assert_equals(number_to_string(1+2), '3')
        test.assert_equals(number_to_string(1-2), '-1')
        test.assert_equals(number_to_string(0), '0')


# 7. DNA To RNA 
def dnaToRNA(adn): return adn.replace('T', 'U')

@test.describe("Sample Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(dna_to_rna("TTTT"), "UUUU")
        test.assert_equals(dna_to_rna("GCAT"), "GCAU")
        test.assert_equals(dna_to_rna("GACCGCCGCC"), "GACCGCCGCC")



# 10. upper string

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(make_upper_case("hello"), "HELLO")

def make_upper_case(s): return s.upper()



# 11. total points in matchs

def points(games):
    points = 0 
    
    for resultMatch in games: 
        rX = int(resultMatch[0])
        rY = int(resultMatch[-1])
        
        if rX > rY: 
            points += 3
        if rX == rY: 
            points += 1
    
    return points 


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']), 30)
        test.assert_equals(points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']), 10)
        test.assert_equals(points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']), 0)
        test.assert_equals(points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']), 15)
        test.assert_equals(points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']), 12)

        

# 12. pow arrNumb

def square_sum(numbers):
    sum = 0 
    for e in numbers: 
        pwr = e * e
        sum += pwr
    return sum 
    
@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(square_sum([1,2]), 5)
        test.assert_equals(square_sum([0, 3, 4, 5]), 50)
        test.assert_equals(square_sum([]), 0)
        test.assert_equals(square_sum([-1,-2]), 5)
        test.assert_equals(square_sum([-1,0,1]), 2)



# kata 14 dragons - bullets 

def hero(bullets, dragons):
    doubleDragons = 2 * dragons
    survive = True if bullets >= doubleDragons else False
    return survive

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(hero(10, 5), True)
        test.assert_equals(hero(7, 4), False)
        test.assert_equals(hero(4, 5), False)
        test.assert_equals(hero(100, 40), True)
        test.assert_equals(hero(1500, 751), False)
        test.assert_equals(hero(0, 1), False)


# kata 16: reverse words

def rvStr(string):
    rs = string.split(" ")  
    ns = []
    for w in rs:
        ns.append(w[::-1])
    return " ".join(ns)

@test.describe("Kata Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(reverse_words('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god', "Input: 'The quick brown fox jumps over the lazy dog.'")
        test.assert_equals(reverse_words('apple'), 'elppa', "Input: 'apple'")
        test.assert_equals(reverse_words('a b c d'), 'a b c d', "Input: 'a b c d'")
        test.assert_equals(reverse_words('  double  spaced  words  '), '  elbuod  decaps  sdrow  ', "Input: '  double  spaced  words  '")
        test.assert_equals(reverse_words('stressed desserts'), 'desserts stressed', "Input: 'stressed desserts'")
        test.assert_equals(reverse_words('hello hello'), 'olleh olleh', "Input: 'hello hello'")
        test.assert_equals(reverse_words(''), '', "Input: '' (empty string)")
        test.assert_equals(reverse_words('    '), '    ', "Input: '    ' (4 spaces)")
        test.assert_equals(reverse_words('a'), 'a', "Input: 'a'")


    @test.it('Random Tests')
    def _():
    
        from random import randrange as rand, sample

        words = ["Kata", "should", "always", "have", "random", "tests", "case", "to", "avoid", "hardocoded", "solution.", "This", "is", "a", "rule!"]

        for _ in range(100):
            s = ' '*(rand(6)-3) + ' '.join(w + ' '*(rand(7)-4) for w in sample(words, rand(len(words))))
            exp = " ".join(("".join(list(s)[::-1])).split(" ")[::-1])
            test.assert_equals(reverse_words(s), exp, f"Input: '{s}'")



# kata 17 

@test.describe("Fixed tests")
def _():
    test_cases = [
        ("xo",      True, None),
        ("XO",      True, None),
        ("xo0",     True, "Zero is not an O"),
        ("xxxoo",   False, None),
        ("ooxx",    True, None),
        ("xooxx",   False, None),
        ("ooxXm",   True, "Comparison is case-insensitive"),
        ("zpzpzpp", True, "when no 'x' and 'o' is present should return true"),
        ("zzoo",    False, None),
        ("oxOx",    True, None),
        ("",        True, "Empty string contains equal amount of x and o"),
        ("xxxxxoooxooo", True, None),
        ("xxxxxoooXooo", True, "Comparison is case-insensitive"),
        ("abcdefghijklmnopqrstuvwxyz", True, "Alphabet contains equal amount of x and o")
    ]
    for s, expected, msg in test_cases:
        @test.it(f"{s = }")
        def _():
            test.assert_equals(xo(s), expected, msg)

@test.describe("Random tests")
def _():
    from random import randint, shuffle, choice
    for _ in range(0, 50):
        s, length, c = [], randint(0,30), 0
        for i in range(length):
            match randint(0,2):
                case 0: s.append(choice("xX")); c += 1
                case 1: s.append(choice("oO")); c -= 1
                case 2: s.append(choice("abcdefghijklmnpqrstuvwyzABCDEFGHIJKLMNPQRSTUVWYZ0123456789"))
        if randint(0,2) == 0: s += ["xo"[c>0]]*abs(c); c = 0
        s = "".join(s)
        @test.it(f"{s = }")
        def t():
            exp = c == 0
            test.assert_equals(xo(s), exp)



# kata 20 - friends

def Friends(arrStr):
    return [f for f in arrStr if len(f) == 4] 

def friendS(arrStr):
    return list(filter(lambda f : len(f) == 4, arrStr))


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(friend(["Ryan", "Kieran", "Mark",]), ["Ryan", "Mark"])
        test.assert_equals(friend(["Ryan", "Jimmy", "abc", "d", "Cool Man"]), ["Ryan"])
        test.assert_equals(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
        test.assert_equals(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
        test.assert_equals(friend(["Hell", "Is", "a", "badd", "word"]), ["Hell", "badd", "word"])
        test.assert_equals(friend(["Issa", "Issac", "Issacs", "ISISS"]), ["Issa"])
        test.assert_equals(friend(["Robot", "Your", "MOMOMOMO"]), ["Your"])
        test.assert_equals(friend(["Your", "BUTT"]), ["Your", "BUTT"])
        test.assert_equals(friend(["Hello", "I", "AM", "Sanjay", "Gupt"]), ["Gupt"])
        test.assert_equals(friend(["This", "IS", "enough", "TEst", "CaSe"]), ["This", "TEst", "CaSe"])
        test.assert_equals(friend([]), [])

@test.describe("Random Tests")
def _():    
    from random import choice, randint
    
    from string import ascii_letters as l
    abc = l
    
    def random_string(friend=False):
        return "".join(choice(abc) for _ in range(friend and 4 or randint(0, 20)))
        
    def random_input():
        return [random_string(randint(0, 100) % 4 == 0) for _ in range(randint(0, 20))]
    
    def solution(l):
        return [w for w in l if len(w) == 4]
    
    for _ in range(100):
        ri = random_input()
        expected = solution(ri)
        @test.it(f"testing for friend({ri})")
        def test_case():
            test.assert_equals(friend(ri), expected)



# kata 21 - pin 

def pin(string):
    from re import findall
    l = list(string)
    filt = list(findall("[0-9]", string))

    if l == filt: 
        return True if len(l) == 4 or len(l) == 6 else False
    else:
        return False


from random import randint, choice
from string import ascii_letters, punctuation, digits

def run_test(pin, expected):
    @test.it(f"testing validate_pin({pin!r})")
    def test_case():
        test.assert_equals(validate_pin(pin), expected)

@test.describe("Fixed Tests")
def fixed_tests():
    @test.describe("should return False for pins with length other than 4 or 6")
    def basic_test_cases():
        run_test("1", False)
        run_test("12", False)
        run_test("123", False)
        run_test("12345", False)
        run_test("1234567", False)
        run_test("-1234", False)
        run_test("-12345", False)
        run_test("1.234", False)
        run_test("00000000", False)

    @test.describe("should return False for pins which contain characters other than digits")
    def _():
        run_test("a234", False)
        run_test(".234", False)

    @test.describe("should return True for valid pins")
    def _():
        run_test("1234", True)
        run_test("0000", True)
        run_test("1111", True)
        run_test("123456", True)
        run_test("098765", True)
        run_test("000000", True)
        run_test("123456", True)
        run_test("090909", True)

    @test.describe("should handle edge cases")
    def _():
        tests = [
            '',
            '123',
            '12345',
            '1234567',
            '1234567890',
            '1234x',
            '123456x',
            '12.0',
            '1234.0',
            '123456.0',
            '123\n',
            '1234\n',
            '09876\n',
            '098765\n',
            '-111',
            '111-',
            '-44444',
            '44444-',
            '+111',
            '+88888',
            '+1111',
            '-2018',
            '+234567',
            '-234567',
            '123/',
            '456:',
            '\xbe', # "three quarters" in Python 3, just some byte in Python 2
            "123.", 
            "-12."
        ]
        for s in tests:
            run_test(s, False)

@test.describe("should work with random input")
def random_tests():

    all_chars = ascii_letters + punctuation + digits

    def solution(pin):
        return len(pin) in (4, 6) and pin.isdigit()

    def rand_valid_pin():
        length = 4 if randint(0, 1) else 6
        return "".join(choice(digits) for _ in range(length))

    def rand_pin():
        return "".join(choice(all_chars) for _ in range(randint(0, 10)))

    for _ in range(40):
        pin = rand_pin() if randint(0, 1) else rand_valid_pin()
        run_test(pin, solution(pin))


