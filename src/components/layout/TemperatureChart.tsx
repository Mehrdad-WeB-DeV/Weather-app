import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Props = {
  daily: {
    time: string[];
    temperature_2m_max: number[];
  };
};

export default function TemperatureChart({ daily }: Props) {
  const data = daily.time.map((day, index) => ({
    day: new Date(day).toLocaleDateString("fa-IR", {
      weekday: "short",
    }),
    temp: daily.temperature_2m_max[index],
  }));

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 rounded-3xl bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/20">
      
      <h2 className="text-center text-xl font-bold mb-4">
        📈 نمودار دمای ۷ روز آینده
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          
          <CartesianGrid strokeDasharray="3 3" />
          
          <XAxis dataKey="day" />
          
          <YAxis />
          
          <Tooltip />

          <Line
            type="monotone"
            dataKey="temp"
            stroke="#3b82f6"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}