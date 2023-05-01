
import { renderHook, act } from '@testing-library/react';
import useStore from '<ADD STORE FILEPATH>';

describe('INITIAL RENDER', () => { 
  const { result } = renderHook(useStore); 
  
  	it('todoListState should initialize correctly', () => {
		expect(result.current.todoListState).toStrictEqual([]);
	});

	it('todoListFilterState should initialize correctly', () => {
		expect(result.current.todoListFilterState).toStrictEqual("Show All");
	});

	it('todoListSortState should initialize correctly', () => {
		expect(result.current.todoListSortState).toStrictEqual(false);
	});

	it('quoteText should initialize correctly', () => {
		expect(result.current.quoteText).toStrictEqual("");
	});

	it('quoteNumber should initialize correctly', () => {
		expect(result.current.quoteNumber).toStrictEqual(0);
	});

	it('checkBox should initialize correctly', () => {
		expect(result.current.checkBox).toStrictEqual(false);
	});

	it('searchResultState should initialize correctly', () => {
		expect(result.current.searchResultState).toStrictEqual({"all":{"searchTerm":"","results":[]},"high":{"searchTerm":"","results":[]},"medium":{"searchTerm":"","results":[]},"low":{"searchTerm":"","results":[]}});
	});


});


describe('STATE CHANGES', () => { 
  const { result } = renderHook(useStore);
 
  
	it('checkBox & quoteText should update correctly', () => {
      const { result } = renderHook(useStore);
  
      act(() => {
	result.current.setCheckBox();
	result.current.setCheckBox();
	result.current.changeQuoteText("\"Make the most of yourself for that is all there is of you.\"\n\t- Ralph Emerson");

});
  
      
expect(result.current.checkBox).toStrictEqual(true);
expect(result.current.quoteText).toStrictEqual("\"Make the most of yourself for that is all there is of you.\"\n\t- Ralph Emerson");  
    });
});

//second test

import { renderHook, act } from '@testing-library/react';
import useStore from '<ADD STORE FILEPATH>';

describe('INITIAL RENDER', () => { 
  const { result } = renderHook(useStore); 
  
  	it('todoListState should initialize correctly', () => {
		expect(result.current.todoListState).toStrictEqual([]);
	});

	it('todoListFilterState should initialize correctly', () => {
		expect(result.current.todoListFilterState).toStrictEqual("Show All");
	});

	it('todoListSortState should initialize correctly', () => {
		expect(result.current.todoListSortState).toStrictEqual(false);
	});

	it('quoteText should initialize correctly', () => {
		expect(result.current.quoteText).toStrictEqual("");
	});

	it('quoteNumber should initialize correctly', () => {
		expect(result.current.quoteNumber).toStrictEqual(0);
	});

	it('checkBox should initialize correctly', () => {
		expect(result.current.checkBox).toStrictEqual(false);
	});

	it('searchResultState should initialize correctly', () => {
		expect(result.current.searchResultState).toStrictEqual({"all":{"searchTerm":"","results":[]},"high":{"searchTerm":"","results":[]},"medium":{"searchTerm":"","results":[]},"low":{"searchTerm":"","results":[]}});
	});


});


describe('STATE CHANGES', () => { 
  const { result } = renderHook(useStore);
 
  
	it('checkBox & quoteText & todoListState should update correctly', () => {
      const { result } = renderHook(useStore);
  
      act(() => {
	result.current.setCheckBox();
	result.current.setCheckBox();
	result.current.changeQuoteText("\"Make the most of yourself for that is all there is of you.\"\n\t- Ralph Emerson");
	result.current.addTodoListItem({"id":2,"text":"","priority":"low","isComplete":false});

});
  
      
expect(result.current.checkBox).toStrictEqual(true);
expect(result.current.quoteText).toStrictEqual("\"Make the most of yourself for that is all there is of you.\"\n\t- Ralph Emerson");
expect(result.current.todoListState).toStrictEqual([{"id":2,"text":"","priority":"low","isComplete":false}]);  
    });
	it('checkBox & todoListState should update correctly', () => {
      const { result } = renderHook(useStore);
  
      act(() => {
	result.current.setCheckBox();
	result.current.setCheckBox();
	result.current.addTodoListItem({"id":3,"text":"This thingy","priority":"low","isComplete":false});
	result.current.setCheckBox();

});
  
      
expect(result.current.checkBox).toStrictEqual(false);
expect(result.current.todoListState).toStrictEqual([{"id":2,"text":"","priority":"low","isComplete":false},{"id":3,"text":"This thingy","priority":"low","isComplete":false}]);  
    });
	it('todoListState should update correctly', () => {
      const { result } = renderHook(useStore);
  
      act(() => {
	result.current.addTodoListItem({"id":4,"text":"The other thingy","priority":"high","isComplete":false});
	result.current.setCheckBox();

});
  
      
expect(result.current.todoListState).toStrictEqual([{"id":2,"text":"","priority":"low","isComplete":false},{"id":3,"text":"This thingy","priority":"low","isComplete":false},{"id":4,"text":"The other thingy","priority":"high","isComplete":false}]);  
    });
});