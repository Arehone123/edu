import React, { useState } from "react";

function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    const contactInfo = [
        { text: "+27 (0) 21 123 4567", type: "phone" },
        { text: "info@edutrack-ai.com", type: "email" },
        { text: "www.edutrack-ai.com", isLink: true, type: "website" },
        { text: "Follow us on LinkedIn", isLinkedIn: true, type: "social" },
    ];

    return (
        <section className="w-full bg-white/90 backdrop-blur-xl p-6 md:p-12 rounded-2xl shadow-xl max-w-6xl mx-auto my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                        We'd love to hear from you! Whether you have a question, need
                        support, or just want to say hi, feel free to reach out.
                    </p>

                    <div className="flex flex-col gap-3">
                        {contactInfo.map((contact, idx) => (
                            <div
                                key={idx}
                                className="p-3 rounded-lg border border-teal-100 bg-teal-50 hover:bg-teal-100 transition"
                            >
                                {contact.isLink ? (
                                    <a
                                        href={
                                            contact.type === "website"
                                                ? `http://${contact.text}`
                                                : "#"
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-700 font-medium hover:text-teal-500 break-words"
                                    >
                                        {contact.text}
                                    </a>
                                ) : (
                                    <span className="text-gray-700 font-medium break-words">
                    {contact.text}
                  </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md"
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="p-3 border rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-teal-700 to-teal-500 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
