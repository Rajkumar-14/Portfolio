export default function Contact() {
  return (
    <section className="pt-32 max-w-xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <input className="w-full p-3 mb-4 rounded bg-slate-800" placeholder="Email" />
      <textarea className="w-full p-3 mb-4 rounded bg-slate-800" placeholder="Message" />
      <button className="px-6 py-3 bg-cyan-500 text-black rounded-full">
        Send
      </button>
    </section>
  );
}
