Python Unit Testing


unittest - Automated testing framework:

	unittest module sometimes referred to as 'PyUnit
	
	is based on the XUnit framework
	
	The same pattern is repeated in
	
	C, Perl, Java, and Smalltalk.
	
	
	supports fixtures, test suites, and a test runner to enable automated testing for your code.



|| Structure

	Two parts:
		
		code to manage test "fixtures"
		
		the test itself
		
		
		Individual tests are created by subclassing 
		
		TestCase and overriding or adding appropriate methods.
	
		
		```
		import unittest

		class SimplisticTest(unittest.TestCase):

			def test(self):
				self.assertTrue(True)

		if __name__ == '__main__':
			unittest.main()
		
		```
		
		SimplisticTest has a single test() method
		
		Fail if True is ever False.
		 
		 
		
|| Running Test 

	The easiest way, include

	```
	if __name__ == '__main__':
    unittest.main()
	
	```
	
	
	Output:
		
		```
		$ python3 test_simple.py

		.
		
		Ran 1 test in 0.000s
		
		OK		
		
		```
		
		Is the abbreviated output: 
		
			includes time the tests took
			
			with a status indicator for each test
			
			(the ".") means that a test passed).
			
			
		Detailed output: 
		
			include the -v option
			
			
			```
			$ python3 test_simple.py -v

			test (__main__.SimplisticTest) ... ok

			----------------------------------------------------------------------
			Ran 1 test in 0.000s

			OK
			
			```
			
	
	
|| Test Outcomes


	3 possible outcomes:
	
		ok: The test passes.
				
		FAIL: not pass, and raises an AssertionError exception.
	
		ERROR: test raises an exception other than AssertionError.
		
	
	There is no explicit way to cause a test to "pass"
	
	so a test's status depends on the presence (or absence) of an exception.
	
	
	```
	import unittest

	class OutcomesTest(unittest.TestCase):

		def test_pass(self):
			self.assertTrue(True)

		def test_fail(self):
			self.assertTrue(False)

		def test_error(self):
			raise RuntimeError('Test error!')

	if __name__ == '__main__':
		unittest.main()
		
	```
	
	When a test fails or generates an error
	
	the traceback is included in the output
	
	
	test_fail() fails and the traceback shows
	
	the line with the failure code.
	
	
	It is up to the person reading the test output 
	
	to look at the code to figure out the semantic meaning

	
	To make it easier to understand the nature of a test failure
	
	the assert*() methods all accept an argument msg
	
	can be used to produce a more detailed error message
	
	
	```
	import unittest

	class FailureMessageTest(unittest.TestCase):

		def test_fail(self):
			self.assertTrue(False, 'failure message goes here')

	if __name__ == '__main__':
		unittest.main()
	
	```

	
	
|| Asserting Truth

	Most tests assert the truth of some condition.
	
	are a few different ways to write truth-checking tests
		
	depending on the perspective of the test author
	
	and the desired outcome of the code being tested

	
	If the code produces a value 
	
	which can be evaluated as true
	
	the method assertTrue() should be used.
	

	If the code produces a false value
	
	the method assertFalse() makes more sense.


	```
	import unittest

	class TruthTest(unittest.TestCase):

		def test_assert_true(self):
			self.assertTrue(True)

		def test_assert_false(self):
			self.assertFalse(False)

	if __name__ == '__main__':
		unittest.main()
	
	```
	
	Out:
	
		```
		$ python3 test_truth.py -v

		test_assert_false (__main__.TruthTest) ... ok
		test_assert_true (__main__.TruthTest) ... ok

		----------------------------------------------------------------------
		Ran 2 tests in 0.000s

		OK
	
		```
		
	
	
|| Assertion Methods
	
	The TestCase class provides a number of methods 
	
	to check for and report failures:
	
		
		assert* methods

	
	
	Common Assertions:
		
		assertTrue(x, msg=None)
		
		assertFalse(x, msg=None)
		
		assertIsNone(x, msg=None)
		
		assertIsNotNone(x, msg=None)
		
		assertEqual(a, b, msg=None)
		
		assertNotEqual(a, b, msg=None)
		
		assertIs(a, b, msg=None)
		
		assertIsNot(a, b, msg=None)
		
		assertIn(a, b, msg=None)
		
		assertNotIn(a, b, msg=None)
		
		assertIsInstance(a, b, msg=None)
		
		assertNotIsInstance(a, b, msg=None)
		
		
	Other Assertions:
	
		assertAlmostEqual(a, b, places=7, msg=None, delta=None)
		
		assertNotAlmostEqual(a, b, places=7, msg=None, delta=None)
		
		assertGreater(a, b, msg=None)
		
		assertGreaterEqual(a, b, msg=None)
		
		assertLess(a, b, msg=None)
		
		assertLessEqual(a, b, msg=None)
		
		assertRegex(text, regexp, msg=None)
		
		assertNotRegex(text, regexp, msg=None)



|| Failure Messages

	since the values being compared appear 
	
	in the failure message when a test fails.


	```
	import unittest

	class InequalityTest(unittest.TestCase):

		def testEqual(self):
			self.assertNotEqual(1, 3-2)

		def testNotEqual(self):
			self.assertEqual(2, 3-2)

	if __name__ == '__main__':
		unittest.main()
		
	```


	Out: 
	
		```
		$ python3 test_notequal.py -v

		testEqual (__main__.InequalityTest) ... FAIL
		testNotEqual (__main__.InequalityTest) ... FAIL

		======================================================================
		FAIL: test_equal (__main__.InequalityTest)
		----------------------------------------------------------------------
		Traceback (most recent call last):
		  File "test_notequal.py", line 7, in test_equal
			self.assertNotEqual(1, 3-2)
		AssertionError: 1 == 1

		======================================================================
		FAIL: test_not_equal (__main__.InequalityTest)
		----------------------------------------------------------------------
		Traceback (most recent call last):
		  File "test_notequal.py", line 10, in test_not_equal
			self.assertEqual(2, 3-2)
		AssertionError: 2 != 1

		----------------------------------------------------------------------
		Ran 2 tests in 0.000s

		FAILED (failures=2)
		
		```
		
		All the assert methods
		
		accept a msg argument that, if specified
		
		is used as the error message on failure.
		
		
		
|| Testing for Exceptions (and Warnings)

	assert* methods:
		
		assertRaises(exception)
	
		assertRaisesRegex(exception, regexp)
	
		assertWarns(warn, fun, *args, **kwds)
	
		assertWarnsRegex(warn, fun, *args, **kwds)
	
	
	if a test raises an exception other 
	
	than AssertionError it is treated as an error. 


	very useful for uncovering mistakes
	
	while you are modifying code
	 
	which has existing test coverage
	
	
	in which you want the test to verify 
	
	that some code does produce an exception.
	
	if an invalid value is given to an attribute of an object
	
	assertRaises() makes the code more clear than trapping the exception yourself. 
	
	
	```
	import unittest

	def raises_error(*args, **kwds):
		raise ValueError('Invalid value: %s%s' % (args, kwds))

	class ExceptionTest(unittest.TestCase):

		def test_trap_locally(self):
			try:
				raises_error('a', b='c')
			except ValueError:
				pass
			else:
				self.fail('Did not see ValueError')

		def test_assert_raises(self):
			self.assertRaises(ValueError, raises_error, 'a', b='c')

	if __name__ == '__main__':
		unittest.main()
	
	```
	
	
	Out:
		
		```
		$ python3 test_exception.py -v

		test_assert_raises (__main__.ExceptionTest) ... ok
		test_trap_locally (__main__.ExceptionTest) ... ok

		----------------------------------------------------------------------
		Ran 2 tests in 0.000s

		OK
		
		```
	
	 The results for both are the same
	
	 but the second test using assertRaises()
	 
	 is more succinct.
	
	
	
|| Test Fixtures

	are resources needed by a test. 
	
	if you are writing several tests 
	
	for the same class
	
	those tests all need an instance
	
	of that class to use for testing.
	
	
	Other test fixtures include
	
	database connections and temporary files
	
		
	TestCase includes a special hook
	
	to configure and clean up any fixtures
	
	needed by your tests


	To configure the fixtures
	
	override setUp(). To clean up, 
	
	override tearDown().


	```
	import unittest

	class FixturesTest(unittest.TestCase):

		def setUp(self):
			print('In setUp()')
			self.fixture = range(1, 10)

		def tearDown(self):
			print('In tearDown()')
			del self.fixture

		def test(self):
			print('in test()')
			self.assertEqual(self.fixture, range(1, 10))

	if __name__ == '__main__':
		unittest.main()
	
	```


|| Test Suites
	
	organize test suites manually

	or
	
	build the suites automatically 
	
	is especially useful for large code bases
	
	related tests are not all in the same place
	
	
	Tools such as nose
	
	make it easier to manage tests
	
	when they are spread over multiple files
	
	and directories
	
	



