export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-auto">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
