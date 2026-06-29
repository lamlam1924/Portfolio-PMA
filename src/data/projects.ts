import type { Project } from '../types/project'

export const jdSignals = [
  'Requirement Analysis',
  'Workflow Design',
  'Team Collaboration',
  'Progress Tracking',
  'Feedback Integration',
  'Scope Management',
  'Business Thinking',
  'Technical Feasibility',
]

export const projects: Project[] = [
  {
    id: 'rms',
    name: 'RMS',
    title: 'Recruitment Management System',
    chapter: 'Chapter 01',
    theme: 'Team coordination starts with a shared understanding of the workflow.',
    time: '02/2026 - 04/2026',
    team: '4 members',
    role: 'Workflow Contributor',
    tags: ['Teamwork', 'Requirement', 'Mentor Feedback'],

    story: {
      title: 'A documented workflow does not always mean a shared understanding.',

      before:
        'At first, I thought assigning tasks clearly was enough for a team to work effectively.',

      situation:
        'While working on RMS, I noticed that team members interpreted candidate statuses and responsibilities differently. Although the workflow was documented, several underlying assumptions were still unclear.',

      whatIDid: [
        'Clarified the meaning of each candidate status with the team.',
        'Reviewed the workflow with our mentor whenever different interpretations appeared.',
        'Updated the requirement notes after each discussion.',
      ],

      workedWith: [
        'Development team',
        'Mentor',
        'Recruitment stakeholders (simulated)',
      ],

      result:
        'The team reached a more consistent understanding of the workflow, making discussions and implementation more aligned.',

      lesson:
        'Since this project, I have developed the habit of clarifying assumptions before implementation instead of focusing only on task allocation.',
    },

    artifacts: [
      'Workflow Note',
      'Status Matrix',
      'Meeting Note',
    ],
  },

  {
    id: 'rentify',
    name: 'Rentify',
    title: 'Rental Management Platform',
    chapter: 'Chapter 02',
    theme: 'Business rules shape how a feature is understood.',
    time: '02/2026 - 04/2026',
    team: '5 members',
    role: 'Software Engineer',
    tags: ['Business Logic', 'Workflow', 'Product Thinking'],

    story: {
      title: 'A technically correct solution is not always the right business solution.',

      before:
        'Before Rentify, I usually evaluated a feature based on whether it was technically feasible.',

      situation:
        'While working on Rentify, I realized that the way a feature is described also shapes user expectations. When business rules are unclear, the product can easily be misunderstood.',

      whatIDid: [
        'Discussed the role of Tax Estimation as a reference rather than an official calculation.',
        'Reviewed the rental workflow to better reflect the real rental process.',
        'Aligned dashboard metrics with landlords’ operational decisions.',
      ],

      workedWith: [
        'Development team',
        'Business reviewer',
        'Landlord stakeholders (simulated)',
      ],

      result:
        'Business assumptions became clearer in both the workflow and documentation, helping the team establish a shared understanding before implementation.',

      lesson:
        'Since this project, I have spent more time understanding business rules before thinking about technical solutions.',
    },

    artifacts: [
      'Business Rules',
      'Rental Workflow',
      'Tax Estimation Note',
    ],
  },

  {
    id: 'tuteclass',
    name: 'TuteClass',
    title: 'Education Management Platform',
    chapter: 'Chapter 03',
    theme: 'A well-defined scope helps a project move further than adding more features.',
    time: '06/2026 - Present',
    team: '5 members',
    role: 'Software Engineer',
    tags: ['Requirement', 'Workflow', 'Scope', 'Feasibility'],

    story: {
      title: 'Not every good idea belongs in the first release.',

      before:
        'Before TuteClass, I often believed that adding more features would naturally make the product better.',

      situation:
        'As the project expanded with ideas for teachers, students and AI features, I realized that identifying the core workflow was more important than implementing everything at once.',

      whatIDid: [
        'Reviewed the core workflow with the team.',
        'Separated future ideas from the MVP scope.',
        'Discussed feasibility and UI/UX decisions with our mentor.',
      ],

      workedWith: [
        'Development team',
        'Mentor',
        'End-user roles (simulated)',
      ],

      result:
        'The MVP scope became clearer, the workflow became more focused, and the team had a more practical roadmap for implementation.',

      lesson:
        'Since this project, I have learned to identify the essential scope before expanding the feature set.',
    },

    artifacts: [
      'Requirement List',
      'User Stories',
      'Activity Diagram',
    ],
  },
]
