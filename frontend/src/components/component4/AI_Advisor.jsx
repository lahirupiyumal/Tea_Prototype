import { useState } from "react";
import { Bot, Leaf, Send, Sparkles, User, X } from "lucide-react";

const starterQuestions = [
	"Which country should I export this batch to?",
	"Should I sell now or wait?",
	"What is the predicted auction price?",
	"Why did the AI recommend UAE?",
];

const sampleResponses = {
	country: "For batch TB-2026-00125, I recommend the UAE. Its market suitability score is 92%, demand is strong, and the BOPF grade matches premium buyer requirements. The United Kingdom is a close second at 87%.",
	timing: "I recommend waiting 14 days. The current auction price is Rs. 1,800/kg, while the model forecasts Rs. 1,950/kg. That is an estimated 12% profit improvement with 89% confidence.",
	price: "The predicted auction price is Rs. 1,950/kg in 14 days. The forecast is based on export demand, historical auction prices, the batch quality index, tea grade, and exchange-rate movement.",
	uae: "The UAE recommendation is driven by a 92% market suitability score, high demand, and strong margins for verified BOPF tea. Blockchain verification and the batch quality score of 92% also improve buyer confidence.",
	fallback: "I can help with tea export destinations, auction prices, selling timing, market demand, quality scores, batch readiness, and buyer recommendations. Try asking about batch TB-2026-00125.",
};

const initialMessage = {
	role: "assistant",
	text: "Hello. I am your Tea Export Advisor. Ask me about a batch, destination market, price forecast, or the best time to sell.",
};

function getResponse(question) {
	const text = question.toLowerCase();
	if (text.includes("country") || text.includes("destination") || text.includes("export")) return sampleResponses.country;
	if (text.includes("sell") || text.includes("wait") || text.includes("now")) return sampleResponses.timing;
	if (text.includes("price") || text.includes("auction") || text.includes("forecast")) return sampleResponses.price;
	if (text.includes("uae") || text.includes("why") || text.includes("recommend")) return sampleResponses.uae;
	return sampleResponses.fallback;
}

export default function AIAdvisor() {
	const [messages, setMessages] = useState([initialMessage]);
	const [question, setQuestion] = useState("");

	function askAdvisor(value = question) {
		const cleanQuestion = value.trim();
		if (!cleanQuestion) return;
		setMessages((current) => [
			...current,
			{ role: "user", text: cleanQuestion },
			{ role: "assistant", text: getResponse(cleanQuestion) },
		]);
		setQuestion("");
	}

	function handleSubmit(event) {
		event.preventDefault();
		askAdvisor();
	}

	return (
		<div className="advisor-page">
			<div className="advisor-heading">
				<div>
					<span>TEA EXPORT DECISION SUPPORT</span>
					<h1>AI Tea Export Advisor</h1>
					<p>Focused guidance for tea markets, quality, pricing, and batch decisions.</p>
				</div>
				<div className="advisor-status"><i /> Advisor online</div>
			</div>

			<div className="advisor-layout">
				<section className="advisor-chat card">
					<div className="advisor-chat-header">
						<div className="advisor-avatar"><Bot size={21} /></div>
						<div><strong>TeaWise AI</strong><span>Export intelligence assistant</span></div>
						<button className="advisor-clear" type="button" onClick={() => setMessages([initialMessage])} aria-label="Clear conversation" title="Clear conversation"><X size={16} /></button>
					</div>

					<div className="advisor-messages" aria-live="polite">
						{messages.map((message, index) => <div className={`advisor-message ${message.role}`} key={`${message.role}-${index}`}><div className="message-icon">{message.role === "assistant" ? <Bot size={14} /> : <User size={14} />}</div><div><span>{message.role === "assistant" ? "TeaWise AI" : "You"}</span><p>{message.text}</p></div></div>)}
					</div>

					<form className="advisor-input-row" onSubmit={handleSubmit}>
						<input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about a tea export decision..." aria-label="Ask the tea export advisor" />
						<button type="submit" aria-label="Send question" title="Send question"><Send size={17} /></button>
					</form>
				</section>

				<aside className="advisor-side">
					<div className="card advisor-context"><div className="card-header"><div><h3>Current tea context</h3><p>Data used for recommendations</p></div><Leaf size={17} /></div><div className="context-row"><span>Active batch</span><strong>TB-2026-00125</strong></div><div className="context-row"><span>Grade</span><strong>BOPF</strong></div><div className="context-row"><span>Quality index</span><strong>92%</strong></div><div className="context-row"><span>Current auction</span><strong>Rs. 1,800/kg</strong></div><div className="context-row"><span>Forecast</span><strong className="advisor-green">Rs. 1,950/kg</strong></div></div>
					<div className="card starter-card"><div className="card-header"><div><h3>Try asking</h3><p>Sample questions for your next decision</p></div><Sparkles size={17} /></div><div className="starter-list">{starterQuestions.map((item) => <button type="button" key={item} onClick={() => askAdvisor(item)}>{item}<Send size={13} /></button>)}</div></div>
				</aside>
			</div>
		</div>
	);
}
