//index.js
import {useState, useEffect} from "react"
import {createRoot} from "react-dom/client"

export default function Paypal() {
  const [transfers, setTransfers] = useState(() => {
    return JSON.parse(localStorage.getItem("transfers"))
  })

  useEffect(() => {
    localStorage.setItem("transfers", JSON.stringify(transfers))
  }, [transfers])

  function handleReceiveClick() {
    setTransfers([...transfers, 10])
  }
  
  function handleSendClick() {
    setTransfers([...transfers, -10])
  }

  function handleResetClick() {
    setTransfers([])
  }

  const balance = transfers.reduce((sum, amount) => sum + amount, 0)

  return <>
    <button onClick={handleReceiveClick}>Принять 10</button>
    <button onClick={handleSendClick}>Перевести 10</button>
    <h2>Баланс: {balance}</h2>
    <button onClick={handleResetClick}>Сброс</button>
    <ul>
      {transfers.map(
        (transfer, index) => <li key={index}>{transfer}</li>
      )}
    </ul>
  </>
}
