import Values from "values.js";
import ColorList from "./ColorList";
import Form from "./Form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values('#e6d7ff').all(10));
  
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  }
  
  return (
    <main>
      <Form addColor={addColor}/>
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
    );
};
export default App;
