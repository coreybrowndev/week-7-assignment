import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 roundex-xl bg-slate-100 text-black border">
      <h1>Appetizers</h1>
      <ul>
        <li>Appetizer 1: Garlic Bread with Marinara</li>
        <li>Appetizer 2: Bruschetta with Tomatoes</li>
        <li>Appetizer 3: Mozzarella Sticks</li>
      </ul>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default page;
