import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {
  const [alert, setAlert] = useState({ show: false });

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ]);

  const handelDelete = (id) => {
    const newExpense = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpense);
    handleAlert({ type: "danger", text: " 아이템이 삭제되었습니다." });
  };

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const newExpense = { id: crypto.randomUUID(), charge, amount };
      // 불변성을 지켜주기 위해 새로운 express 생성
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      setCharge("");
      setAmount(0);
      handleAlert({ type: "success", text: "아이템이 생성되었습니다." });
    } else {
      console.log("error");
      handleAlert({
        type: "danger",
        text: "charge는 빈 값일 수 없으며, amount는 0보다 커야 합니다.",
      });
    }
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };
  return (
    <main className="main-container">
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <h1>예산 계산기</h1>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        {/* {ExpenseForm} */}
        <ExpenseForm
          handleCharge={handleCharge}
          charge={charge}
          handleAmount={handleAmount}
          amount={amount}
          handleSumbit={handleSubmit}
        />
      </div>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        {/* {ExpenseItem} */}
        <ExpenseList initialExpenses={expenses} handelDelete={handelDelete} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
      >
        <p style={{ fontSize: "2rem" }}>
          총지출 :<span>원</span>
        </p>
      </div>
    </main>
  );
};

export default App;

// 함수형
// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
