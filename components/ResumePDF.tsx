import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { personal, experiences, skillCategories } from "@/data/portfolio";

const blue = "#3b82f6";
const dark = "#0f172a";
const mid = "#475569";
const light = "#94a3b8";
const border = "#e2e8f0";

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: dark,
    backgroundColor: "#ffffff",
    paddingTop: 44,
    paddingBottom: 44,
    paddingHorizontal: 48,
    lineHeight: 1.45,
  },

  // ── Header ────────────────────────────────────────────
  header: { marginBottom: 20 },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: dark,
    letterSpacing: 0.3,
    marginBottom: 8,
  },
  titleText: {
    fontSize: 10,
    color: blue,
    fontFamily: "Helvetica-Bold",
    marginTop: 4,
    marginBottom: 4,
    letterSpacing: 0.2,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    alignItems: "center",
  },
  contactItem: { fontSize: 8.5, color: mid },
  contactDot: { fontSize: 8.5, color: light, marginHorizontal: 3 },
  contactLink: { fontSize: 8.5, color: mid, textDecoration: "none" },

  // ── Divider ───────────────────────────────────────────
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: border,
    marginVertical: 12,
  },

  // ── Section ───────────────────────────────────────────
  section: { marginBottom: 16 },
  sectionLabel: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: blue,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  // ── Summary ───────────────────────────────────────────
  summaryText: { fontSize: 9.5, color: mid, lineHeight: 1.55 },

  // ── Experience ────────────────────────────────────────
  expEntry: { marginBottom: 12 },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  expTitle: { fontFamily: "Helvetica-Bold", fontSize: 10, color: dark },
  expPeriod: { fontSize: 8.5, color: light, marginTop: 1 },
  expCompany: { fontSize: 9, color: blue, marginBottom: 4 },
  bullet: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 2.5,
    paddingLeft: 4,
  },
  bulletDot: { fontSize: 9, color: blue, marginRight: 5, marginTop: 0.5 },
  bulletText: { fontSize: 9, color: mid, flex: 1, lineHeight: 1.5 },

  // ── Skills ────────────────────────────────────────────
  skillsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  skillGroup: { width: "47%", marginBottom: 6 },
  skillGroupTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.5,
    color: dark,
    marginBottom: 3,
  },
  skillTags: { flexDirection: "row", flexWrap: "wrap", gap: 3 },
  skillTag: {
    fontSize: 7.5,
    color: mid,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
});

const Divider = () => <View style={s.divider} />;

export function ResumePDF() {
  const topSkills = skillCategories.slice(0, 6);

  return (
    <Document
      title={`${personal.name} – Resume`}
      author={personal.name}
      subject="Senior Full-Stack Engineer | Solutions Architect | DevOps | AI Automation"
      keywords="PHP, AWS, Kubernetes, Docker, React, Next.js, Laravel, DevOps, AI"
    >
      <Page size="A4" style={s.page}>

        {/* ── Header ── */}
        <View style={s.header}>
          <Text style={s.name}>{personal.name}</Text>
          <Text style={s.titleText}>
            Senior Full-Stack Engineer · Solutions Architect · DevOps Engineer · AI Automation Consultant
          </Text>
          <View style={s.contactRow}>
            <Link src={`mailto:${personal.email}`} style={s.contactLink}>
              {personal.email}
            </Link>
            <Text style={s.contactDot}>·</Text>
            <Text style={s.contactItem}>{personal.location}</Text>
          </View>
        </View>

        <Divider />

        {/* ── Summary ── */}
        <View style={s.section}>
          <Text style={s.sectionLabel}>Professional Summary</Text>
          <Text style={s.summaryText}>
            Senior Full-Stack Engineer with 15+ years of experience designing, developing, and
            maintaining scalable web applications, eCommerce platforms, cloud infrastructure, and
            AI-powered automation systems. I help businesses ship products faster, architect reliable
            systems, implement DevOps pipelines, and automate business processes — combining software
            engineering, cloud operations, marketing technology, and AI automation in a single engagement.
          </Text>
        </View>

        <Divider />

        {/* ── Experience ── */}
        <View style={s.section}>
          <Text style={s.sectionLabel}>Experience</Text>

          {experiences.map((exp, i) => (
            <View key={i} style={s.expEntry} wrap={false}>
              <View style={s.expHeader}>
                <Text style={s.expTitle}>{exp.title}</Text>
                <Text style={s.expPeriod}>{exp.period}</Text>
              </View>
              {exp.company && <Text style={s.expCompany}>{exp.company}</Text>}
              {exp.highlights.map((h, j) => (
                <View key={j} style={s.bullet}>
                  <Text style={s.bulletDot}>–</Text>
                  <Text style={s.bulletText}>{h}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <Divider />

        {/* ── Skills ── */}
        <View style={s.section}>
          <Text style={s.sectionLabel}>Skills</Text>
          <View style={s.skillsGrid}>
            {topSkills.map((cat) => (
              <View key={cat.title} style={s.skillGroup}>
                <Text style={s.skillGroupTitle}>{cat.title}</Text>
                <View style={s.skillTags}>
                  {cat.skills.map((sk) => (
                    <Text key={sk.name} style={s.skillTag}>{sk.name}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

      </Page>
    </Document>
  );
}
