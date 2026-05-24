const sendMessage = require("../src/sendMessage");

/* Mocking - jest.fn()
test("jest.fn: 함수 호출 기록 확인", () => {
  const mockApi = {
    send: jest.fn()
  };

  sendMessage(mockApi, "hello");

  console.log(mockApi.send.mock.calls);

});
*/

/* Mocking - toHaveBeenCalled
test("toHaveBennCalled: 함수가 호출됐는지 확인", () => {
  const mockApi = {
    send: jest.fn()
  };

  sendMessage(mockApi, "hello");

  expect(mockApi.send).toHaveBeenCalled();

});
*/

/* Mocking - toHaveBeenCalledWith
test("toHaveBeenCalledWith: 올바른 값으로 호출됐는지 확인", () => {
    const mockApi = {
      send: jest.fn()
    };
 
    sendMessage(mockApi, "wrong");
    expect(mockApi.send).toHaveBeenCalledWith("hello");
});
*/

/* Mocking - jest.spyOn
test("jest.spyOn: 기존 함수 호출 감시", () => {
  const api = {
    send: (msg) => {
      console.log("send:", msg);
    }
  };
  const spy = jest.spyOn(api, "send");
  sendMessage(api, "hello");
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith("hello");
});
*/



test("메시지를 API의 send 함수로 전달한다", () => {
  const api = {
    send: jest.fn(),
  };
  const message = "안녕하세요";

  sendMessage(api, message);

  expect(api.send).toHaveBeenCalledTimes(1);
  expect(api.send).toHaveBeenCalledWith(message);
});
