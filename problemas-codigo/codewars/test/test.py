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


