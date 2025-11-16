export const css = `
.mb-1 {
    margin-bottom: 5px;
}
.header {
    text-align: center;
}

.header .name {
    font-size: 25px;
    text-transform: uppercase;
}

.header .title  {
    color: var(--priColor2);
    font-size: 15px;
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
    margin-top: 14px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    column-gap: 5px;
    text-transform: uppercase;
    color: var(--priColor2);
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
    font-size: 12px;
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
    margin-top: 8px;
    margin-right: 8px;
}

.description-container .description {
    flex-basis: fit-content;
}

.single-line-item {
    display: flex;
    margin-top: 5px;
}

.single-line-item .role {
    width: 195px;
}

.single-line-item .title {
    font-size: 14px;
    font-weight: 600;
}

.single-line-item .organization {
    font-size: 12px;
    font-style: italic;
    font-weight: 500;
    color: var(--priColor2);
}

.single-line-item .summary {
 flex-basis: min-content;
 flex-grow: 1;
}

.single-line-item .time-line {
    font-size: 12px;
    font-style: italic;
    font-weight: 500;
    color: var(--priColor2);
    width: 119px;
    text-align: right;
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
    flex-wrap: wrap;
    row-gap: 5px;
}

.skill {
    border-radius: 5px;
    padding: 2px 5px;
    border: 0.5px solid var(--priColor2);
}
`