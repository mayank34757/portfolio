type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Mayank Yadav – Portfolio",
    fullName: "Mayank",
    email: "mayankggg788@gmail.com",
  },
  hero: {
    name: "Mayank Yadav",
    p: ["I build ML apps, dashboards,", "and data-driven applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm Mayank Yadav, a Data Science enthusiast at Lovely Professional University (LPU). I build machine learning models, ML apps, and data-driven dashboards using Python, SQL, C++, Java, and JavaScript.

Beyond tech, I'm also a sportsman — sports have taught me discipline, teamwork, and perseverance that I bring into every project I work on.

I'm passionate about problem-solving, open-source work, and continuous learning across data science, machine learning, and advanced analytics.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Certifications",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Here are some of my key projects that demonstrate my skills in web development, data analysis, and AI integration. Each project reflects my ability to solve real-world problems using modern technologies and APIs.`,
    },
  },
};
