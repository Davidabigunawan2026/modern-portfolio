/*==================================================
SKILLS DATABASE
==================================================*/

const Skills = {

    // ------------------------------- HTML --------------------------
    html: {

        title: "HTML Explorer",

        description:
            "Explore the most important HTML elements used in modern web development.",


        color: "#E44D26",

        textColor: "#f3f0f0",
        shadowColor: "#E44D26",

        glow: "rgba(228,77,38,.95)",
        tagColor: "#f8af98",

        tags: [

            "<html>",
            "<head>",
            "<body>",
            "<header>",
            "<main>",
            "<section>",
            "<article>",
            "<aside>",
            "<footer>",
            "<nav>",
            "<div>",
            "<span>",
            "<img>",
            "<picture>",
            "<canvas>",
            "<svg>",
            "<video>",
            "<audio>",
            "<form>",
            "<label>",
            "<input>",
            "<textarea>",
            "<button>",
            "<table>",
            "<tr>",
            "<td>",
            "<ul>",
            "<li>",
            "<a>",
            "<script>"

        ]



    },


    // ------------------------------------- CSS ----------------------------------------    
    css: {

        title: "CSS Explorer",

        description:
            "Master modern CSS for responsive layouts, animations and beautiful user interfaces.",

        color: "#75d6ee",

        textColor: "#0a5fc7",
        shadowColor: "#ddebeb",

        glow: "rgba(10, 96, 142, 0.95)",
        tagColor: "#0a61ad",

     
        tags: [

            "display:flex",
            "display:grid",
            "justify-content",
            "align-items",
            "flex-direction",
            "flex-wrap",
            "gap",
            "position",
            "top",
            "left",
            "right",
            "bottom",
            "z-index",
            "overflow",
            "width",
            "height",
            "padding",
            "margin",
            "border-radius",
            "box-shadow",
            "transition",
            "transform",
            "animation",
            "@keyframes",
            ":hover",
            "::before",
            "::after",
            "backdrop-filter",
            "opacity",
            "filter"

        ]

    },

    // ----------------------------- JAVA SCRIPT -----------------------------------
    javascript: {

        title: "JavaScript Explorer",

        description:
            "Learn modern JavaScript for interactive websites, DOM manipulation, events and asynchronous programming.",

      
        color: "#cce82d",
        textColor: "#d8ee69",
        shadowColor: "#985609",
        glow: "rgba(214, 207, 62, 0.95)",
        tagColor: "#95af1e",


        tags: [

            "let",
            "const",
            "var",
            "function()",
            "() => {}",
            "if",
            "else",
            "switch",
            "for",
            "while",
            "forEach()",
            "map()",
            "filter()",
            "addEventListener()",
            "querySelector()",
            "getElementById()",
            "classList",
            "setTimeout()",
            "setInterval()",
            "fetch()",
            "Promise",
            "async",
            "await",
            "JSON",
            "localStorage",
            "requestAnimationFrame()",
            "Math.random()",
            "console.log()",
            "try...catch",
            "import / export"

        ]

    },


    // ------------------ DOM --------------------
    dom: {

        title: "DOM Explorer",

        description:
            "Master the Document Object Model to dynamically access, modify and interact with web pages.",

        color: "#c7dfcd",
        textColor: "#11df4f",
        shadowColor: "#08460d",

        glow: "rgba(209, 219, 209, 0.95)",
        tagColor: "#052a18",

        tags: [

            "document",
            "window",
            "getElementById()",
            "querySelector()",
            "querySelectorAll()",
            "createElement()",
            "appendChild()",
            "removeChild()",
            "replaceChild()",
            "classList",
            "classList.add()",
            "classList.remove()",
            "classList.toggle()",
            "style",
            "textContent",
            "innerHTML",
            "setAttribute()",
            "getAttribute()",
            "addEventListener()",
            "click",
            "input",
            "change",
            "parentNode",
            "children",
            "closest()",
            "dataset"

        ]

    },


    // ------------------------- REACT --------------------------------
    react:{

    title:"React Explorer",

    description:
    "Build modern user interfaces with reusable components, JSX, hooks and efficient state management.",

    color: "#e9eaef",
    textColor: "#d2dad4",
    shadowColor: "#1862b7",

    glow: "rgba(51, 103, 181, 0.95)",
    tagColor: "#5c6269",



    tags:[

        "<Component />",
        "JSX",
        "props",
        "state",
        "useState()",
        "useEffect()",
        "useRef()",
        "useMemo()",
        "useCallback()",
        "useContext()",
        "useReducer()",
        "React.memo()",
        "Fragment",
        "key",
        "map()",
        "createRoot()",
        "StrictMode",
        "Virtual DOM",
        "Event Handler",
        "Conditional Rendering",
        "Custom Hook",
        "Context API",
        "Router",
        "useNavigate()",
        "Outlet",
        "useParams()",
        "useLocation()",
        "lazy()",
        "Suspense",
        "ReactDOM"

    ]

    },

// ----------------------- DATABASE --------------------------------


database: {
    title: "Database",

    description:
        "Learn relational databases, SQL queries, indexing, transactions and database design for modern applications.",

    
    color: "#66abd7",
    textColor: "#abbfe7",
    shadowColor: "#185eb5",

    glow: "rgba(15, 77, 171, 0.95)",
    tagColor: "#222e3c",


    tags: [

        "Database",
        "Table",
        "Record",
        "Field",
        "Row",
        "Column",

        "SELECT",
        "INSERT",
        "UPDATE",
        "DELETE",

        "WHERE",
        "ORDER BY",
        "GROUP BY",
        "HAVING",

        "JOIN",
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",

        "PRIMARY KEY",
        "FOREIGN KEY",
        "INDEX",
        "UNIQUE",

        "VIEW",
        "TRIGGER",
        "PROCEDURE",
        "FUNCTION",

        "TRANSACTION",
        "COMMIT",
        "ROLLBACK",

        "UNION",
        "DISTINCT",

        "COUNT()",
        "SUM()",
        "AVG()",
        "MAX()",
        "MIN()",

        "SQLite",
        "MySQL",
        "SQL Server",
        "Oracle"
    ]
},


// ------------------------------------ GIT ----------------------------------
git: {

    title: "Git / GitHub Explorer",

    description:
        "Learn Git version control, GitHub collaboration, branching, merging, repositories and modern development workflow.",

    color: "#da6015",
    textColor: "#eaa366",
    shadowColor: "#573c0d",

    glow: "rgba(163, 100, 11, 0.95)",
    tagColor: "#6e540a",


    tags: [

        "git init",
        "git clone",
        "git status",
        "git add",
        "git commit",
        "git push",
        "git pull",
        "git fetch",
        "git merge",
        "git rebase",

        "branch",
        "checkout",
        "switch",
        "stash",
        "reset",
        "restore",

        "GitHub",
        "Repository",
        "Fork",
        "Pull Request",
        "Commit",
        "Merge",

        ".gitignore",
        "README.md",
        "Release",
        "Tag",

        "Origin",
        "Remote",
        "Main",
        "Conflict"

    ]

},


};
