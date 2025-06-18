"use client";

export default function Display({
  data,
  message,
  color,
}: {
  data: {
    name: string;
    color: string;
    era: string;
  };
  message: string;
  color: string;
}) {
  return (
    <div
      className="flex flex-col gap-2 p-4 rounded"
      style={{ backgroundColor: color, color: "white" }} 
    >
      <h2 className="text-center bg-[#284f75] font-bold p-2 rounded">INFORMATION</h2>
      <div className="p-2 bg-gray-800 rounded shadow">
        <p>Name: {data.name}</p>
        <p>Color: {data.color}</p>
        <p>Era: {data.era}</p>
      </div>

      <div className="mt-2 p-2 bg-gray-700 rounded shadow">
        <strong>Mensaje:</strong>
        <br />
        {message}
      </div>
    </div>
  );
}
