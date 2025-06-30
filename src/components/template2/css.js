export const css = `
.mb-1 {
    margin-bottom: 5px;
}
.header {
    text-align: center;
}

.header .name {
    font-size: 32px;
    text-transform: uppercase;
}

.header .title  {
    color: var(--priColor2);
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: 500;
}

.contact {
    display: flex;
    justify-content: center;
    column-gap: 10px;
}

a:link {
    color: var(--priColor1);
    text-decoration: underline;
}

a:visited {
    color: var(--priColor1);
}

a:hover {
    color: lightgray;
}

a:active {
    color: #ff4040;
    text-decoration: none;
    font-weight: normal;
}

.section-header {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    column-gap: 5px;
    text-transform: uppercase;
}

.underline {
    border-bottom: 1px solid;
    flex-grow: 1;
    transform: translate(0px, -3px);
}

.record-container {
    margin-top: 5px;
}

.record-container .title {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
}

.record-container .title .time-line {
    font-size: 10px;
    font-style: italic;
    font-weight: 500;
    color: var(--priColor2);
}

.record-container .subtitle {
    font-weight: 600;
    margin-top: 2px;
    color: var(--priColor2);
    display: flex;
    justify-content: space-between;
}

.record-container .subtitle .gpa {
    color: var(--priColor1);
}

.description-container div {
    margin-top: 1px;
}

.description-container .bullet {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: var(--priColor1);
    margin-top: 7px;
    margin-right: 8px;
}

.description-container .description {
    flex-basis: fit-content;
}

.skill-category-container {
    display: flex;
    margin-top: 3px;
    align-items: center;
}

.skill-category {
    width: 190px;
    font-weight: 500;
}

.category-skills-container {
    display: flex;
    column-gap: 5px;
}

.skill {
    border-radius: 5px;
    padding: 2px 5px;
    border: 0.5px solid var(--priColor2);
}
`