"use client";
import { useState } from "react";

export default function Form({ setData, setMessage }: { setData: any; setMessage: any }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [era, setEra] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setData({ name, color, era });
    setMessage(`${name} | ${color} | ${era}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={
          (e) => {
            setName(e.target.value);
            setMessage(`${e.target.value}`);
          }}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setMessage(`${e.target.value}`);
        }}
        className="p-2 border rounded"
      />
      <select 
        name="era" 
        id="era" 
        value={era} 
        onChange={(e) => {
          setEra(e.target.value);
          setMessage(`${e.target.value}`);
        }}
        className="p-2 border rounded"
      >
        <option value="">Era</option>
        <option 
          className="bg-[#223a52] hover:bg-[#536064] text-white"
          value="Showa"
        >
          Showa
        </option>
        <option 
          className="bg-[#223a52] hover:bg-[#536064] text-white"
          value="Heisei"
        >
          Heisei
        </option>
        <option 
          className="bg-[#223a52] hover:bg-[#536064] text-white"
          value="Reiwa"
        >
          Reiwa
        </option>
      </select>
      
      <button 
        type="submit" 
        className="bg-[#223a52] text-white p-2 rounded hover:bg-[#1e4b58]"
      >
        SUBMIT
      </button>
    </form>
  );
}
