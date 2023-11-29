const { Stack } = require("./stack");

describe("Stack Test", () => {
  test("Push and pop", () => {
    const st = new Stack();

    st.push(1);
    st.push(2);
    expect(st.getValues()).toEqual([2, 1]);

    st.push(6);
    st.push(7);
    st.push(9);
    expect(st.getValues()).toEqual([9, 7, 6, 2, 1]);

    st.pop();
    expect(st.getValues()).toEqual([7, 6, 2, 1]);

    st.pop();
    st.pop();

    expect(st.getValues()).toEqual([2, 1]);

    st.pop();
    st.pop();
    st.pop();
    st.pop();
    st.pop();
    expect(st.getValues()).toEqual([]);
  });

  test("Array constructor for stack", () => {
    const st = new Stack([1, 2, 3, 4, 5]);
    expect(st.getValues()).toEqual([5, 4, 3, 2, 1]);
  });
  test("Adding limit for stack overflow", () => {
    const st = new Stack([1, 2, 3, 4, 5]);
    st.setLimit(10);

    st.push(6);
    st.push(7);
    st.push(8);
    st.push(9);
    st.push(10);
    st.push(11);
    st.push(12);

    expect(st.getValues()).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});
