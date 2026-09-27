import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function CurriculumSection() {
  const [activeMonth, setActiveMonth] = useState(1);
  const [openWeek, setOpenWeek] = useState('w1');

  const monthTabs = [
    {
      id: 1,
      month: "Month 1",
      title: "Rapid Foundations to Deployed AI API"
    },
    {
      id: 2,
      month: "Month 2",
      title: "Advanced Systems"
    },
    {
      id: 3,
      month: "Month 3",
      title: "Deployment, Consulting & Capstone"
    }
  ];

  const weeksData = {
    1: [
      {
        id: 'w1',
        title: "W01 — FDE Fundamentals + Rapid Backend Build",
        days: [
          { num: "01", text: "FDE role, mindset & client lifecycle" },
          { num: "02", text: "API-first backend architecture" },
          { num: "03", text: "Ship a deployed AI API end-to-end" }
        ],
        deliverable: "Deliverable: Deployed AI API (live endpoint)"
      },
      {
        id: 'w2',
        title: "W02 — Context Engineering + Client Discovery",
        days: [
          { num: "01", text: "Prompt optimization & dynamic context routing" },
          { num: "02", text: "Structuring client problem into LLM interfaces" },
          { num: "03", text: "Evaluation benchmarks and token budget management" }
        ],
        deliverable: "Deliverable: Production-ready Context Engine"
      },
      {
        id: 'w3',
        title: "W03 — Vector Search, Hybrid Indexing & RAG at Scale",
        days: [
          { num: "01", text: "Chunking heuristics and embeddings comparison" },
          { num: "02", text: "Hybrid search with re-ranking (BM25 + Dense)" },
          { num: "03", text: "Query rewriting and metadata filtering" }
        ],
        deliverable: "Deliverable: Enterprise RAG Service"
      },
      {
        id: 'w4',
        title: "W04 — GraphRAG & Complex Knowledge Synthesis",
        days: [
          { num: "01", text: "Knowledge graph construction from raw docs" },
          { num: "02", text: "Community detection and graph extraction" },
          { num: "03", text: "Graph-augmented retrieval synthesis" }
        ],
        deliverable: "Deliverable: GraphRAG Query Engine"
      }
    ],
    2: [
      {
        id: 'w5',
        title: "W05 — Parameter Efficient Fine-Tuning (LoRA & QLoRA)",
        days: [
          { num: "01", text: "Dataset curation, formatting & deduplication" },
          { num: "02", text: "Quantization, rank selection and trainer configuration" },
          { num: "03", text: "Loss curve diagnostics and checkpoint evaluation" }
        ],
        deliverable: "Deliverable: Fine-tuned Specialized Domain Model"
      },
      {
        id: 'w6',
        title: "W06 — Multi-Agent Systems with LangGraph & CrewAI",
        days: [
          { num: "01", text: "State machines, cyclic graphs & checkpointing" },
          { num: "02", text: "Inter-agent protocols and tool-calling validation" },
          { num: "03", text: "Autonomous task delegation and error fallback" }
        ],
        deliverable: "Deliverable: Autonomous Multi-Agent Support Team"
      },
      {
        id: 'w7',
        title: "W07 — Multimodal Intelligence & Audio/Vision Pipelines",
        days: [
          { num: "01", text: "Vision-language models for document OCR & layout" },
          { num: "02", text: "Streaming speech-to-text and low-latency audio" },
          { num: "03", text: "Multimodal vector indexing" }
        ],
        deliverable: "Deliverable: Multimodal Video & PDF Copilot"
      },
      {
        id: 'w8',
        title: "W08 — AI Security, Guardrails & Jailbreak Defense",
        days: [
          { num: "01", text: "Prompt injection, indirect poisoning & data leaks" },
          { num: "02", text: "Llama Guard, NeMo Guardrails & regex verifiers" },
          { num: "03", text: "PII masking and compliant audit logs" }
        ],
        deliverable: "Deliverable: Hardened Secure Enterprise AI Gateway"
      }
    ],
    3: [
      {
        id: 'w9',
        title: "W09 — Observability, Tracing & Cost Engineering",
        days: [
          { num: "01", text: "OpenTelemetry, Langfuse & Phoenix tracing" },
          { num: "02", text: "Semantic caching with Redis & embedding similarity" },
          { num: "03", text: "Latency budgeting and GPU inference economics" }
        ],
        deliverable: "Deliverable: Production Tracing & Observability Dashboard"
      },
      {
        id: 'w10',
        title: "W10 — Enterprise Integration & Cloud Deployments (vLLM / Triton)",
        days: [
          { num: "01", text: "Containerized deployment with vLLM & continuous batching" },
          { num: "02", text: "Kubernetes orchestration and autoscaling" },
          { num: "03", text: "Enterprise CRM & ERP webhook integration" }
        ],
        deliverable: "Deliverable: High-Throughput Hosted Inference Cluster"
      },
      {
        id: 'w11',
        title: "W11 — Consulting Craft & Scoping Ambiguous RFPs",
        days: [
          { num: "01", text: "Client scoping discovery interviews & architecture memos" },
          { num: "02", text: "Technical estimation, feasibility audits & SLAs" },
          { num: "03", text: "Live stakeholder presentation & executive pitch" }
        ],
        deliverable: "Deliverable: Enterprise AI Architectural Proposal & SOW"
      },
      {
        id: 'w12',
        title: "W12 — Capstone Demo Day & Executive Defense",
        days: [
          { num: "01", text: "Full integration testing, load tests & chaos checks" },
          { num: "02", text: "Live client-style demo rehearsal" },
          { num: "03", text: "Capstone graduation presentation to industry architects" }
        ],
        deliverable: "Deliverable: Shipped Production System & Certification"
      }
    ]
  };

  const currentWeeks = weeksData[activeMonth] || [];

  return (
    <section className="curriculum-section" id="curriculum">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            curriculum
          </div>
          <h2>Twelve weeks. Three arcs. Zero filler.</h2>
          <p>
            Expand any week for its day-by-day build topics and the deliverable that ships by Friday.
          </p>
        </div>

        {/* Month Selector Tabs */}
        <div className="curriculum-tabs-row">
          {monthTabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              className={`curriculum-tab-btn ${activeMonth === tab.id ? 'active' : ''}`}
              onClick={() => {
                setActiveMonth(tab.id);
                setOpenWeek(weeksData[tab.id][0].id);
              }}
            >
              <span className="tab-month-label">{tab.month}</span>
              <span className="tab-month-title">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Accordion Weeks */}
        <div className="curriculum-accordion-wrap">
          {currentWeeks.map(week => {
            const isOpen = openWeek === week.id;
            return (
              <div 
                key={week.id} 
                className={`accordion-week-card ${isOpen ? 'expanded' : 'collapsed'}`}
              >
                <button
                  type="button"
                  className="accordion-week-header"
                  onClick={() => setOpenWeek(isOpen ? '' : week.id)}
                  aria-expanded={isOpen}
                >
                  <span>{week.title}</span>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {isOpen && (
                  <div className="accordion-week-body">
                    {week.days.map((day, idx) => (
                      <div key={idx} className="week-day-item">
                        <span className="day-badge-num">{day.num}</span>
                        <span>{day.text}</span>
                      </div>
                    ))}
                    <div className="week-deliverable-box">
                      {week.deliverable}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
