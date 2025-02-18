import { useEffect, useState } from "react";
import { initWeb3, getMessage, setMessage } from "./utils/web3";

function App() {
  const [message, setMsg] = useState("");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    async function fetchMessage() {
      await initWeb3();
      const msg = await getMessage();
      setMsg(msg);
    }
    fetchMessage();
  }, []);

  const handleUpdateMessage = async () => {
    await setMessage(newMessage);
    setMsg(newMessage);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello World DApp</h1>
      <p>Current Message: {message}</p>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Enter new message"
      />
      <button onClick={handleUpdateMessage}>Update Message</button>
    </div>
  );
}

export default App;
