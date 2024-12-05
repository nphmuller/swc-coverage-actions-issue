export default function Home() {
  return (
    <button
      onClick={async () => {
        "use server";
        console.log("clicked");
      }}
    >
      Click me
    </button>
  );
}
