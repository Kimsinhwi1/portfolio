import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-4">Contact</h1>
      <p className="text-gray-400 mb-8">
        프로젝트에 대한 질문이나 제안이 있으시면 메시지를 남겨주세요.
      </p>
      <ContactForm />
    </div>
  );
}
