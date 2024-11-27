import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ data, dataKey }) => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        data={data}
        margin={{
          top: 50,
          right: 20,
          left: 10,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#D9D9D9" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#D9D9D9" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          dataKey="productName"
          tick={{ fill: "#D9D9D9" }}
          axisLine={{ stroke: "#ccc" }}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "#D9D9D9" }}
          axisLine={{ stroke: "#ccc" }}
          tickLine={false}
          label={{
            value: "Stok Sayısı", // Y eksenindeki etiket
            angle: -90,
            position: "insideLeft",
            fill: "#D9D9D9",
          }}
        />
        <Tooltip
          contentStyle={{ backgroundColor: "#ffffff", borderRadius: 5 }}
          labelStyle={{ fontWeight: "bold" }}
          cursor={{ fill: "#f5f5f5" }}
          formatter={(value) => [`${value} adet`, "Stok Sayısı"]} // Tooltip içeriği
        />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="#D9D9D9"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
