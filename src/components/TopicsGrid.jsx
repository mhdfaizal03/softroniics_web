import React from 'react';
import { Cpu } from 'lucide-react';

export default function TopicsGrid() {
  const topics = [
    "AI Observability",
    "Fine-tuning",
    "LoRA",
    "MCP",
    "QLoRA",
    "CrewAI",
    "LangGraph",
    "GraphRAG",
    "A2A",
    "Multi-modal RAG",
    "CI/CD",
    "Multi-cloud",
    "AI Security"
  ];

  return (
    <section className="topics-section" id="topics">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            Advanced topics
          </div>
          <h2>AI Systems You'll Build</h2>
          <p>
            Not a syllabus of buzzwords — every item below is implemented, tested and shipped inside a weekly deliverable.
          </p>
        </div>

        <div className="topics-grid">
          {topics.map((topic, idx) => (
            <div key={idx} className="topic-chip">
              <Cpu size={22} />
              <span>{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
