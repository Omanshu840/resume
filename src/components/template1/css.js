export const css = `

.header-section {
    text-align: center;
    background-color: var(--priColor1);
    color: white;
    margin: -20px;
    padding: 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.name {
    font-size: 35px;
    text-transform: uppercase;
}

.title {
    font-size: 20px;
    color: var(--secColor1);
}

.contact {
    margin: 8px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 60px;
    row-gap: 5px;
    font-size: 14px;
}

.contact a:link {
    color: lightskyblue
}

.contact a:visited {
    color: lightskyblue;
}

.contact a:hover {
    color: #ffffff;
}

.contact a:active {
    color: #ff4040;
    text-decoration: none;
    font-weight: normal;
}

.section-header {
    margin: 10px 0px;
    padding: 2px 20px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    border: 3px solid var(--secColor1);
    text-transform: uppercase;
    border-radius: 8px;
}

.education {
    margin-top: 20px;
}

.education-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}

.education-right-container {
    text-align: right;
}

.item-title,
.position-title,
.project-name {
    font-weight: 500;
    font-size: 15px;
}

.item-subtitle,
.company-title,
.project-group {
    color: var(--priColor2);
    font-style: italic;
    font-weight: 500;
}

.grade {
    color: var(--priColor2);
}

.company-title {
    margin: 2px 0px;
    font-style: italic;
    color: var(--priColor2);
    font-size: 14px;
}

.company-positions-container {
    border-left: solid 3px var(--secColor1);
}

.company-position {
    padding-bottom: 5px;
    display: flex;
}

.position-content {
    padding-left: 5px;
    width: 100%;
}

.position-title-container {
    display: flex;
    justify-content: space-between;
}

.position-circle {
    width: 10px;
    height: 3px;
    background-color: var(--secColor1);
    margin-top: 7px;
}

.position-title {}

.position-description-container {
    display: flex;
    flex-direction: column;
    row-gap: 3px;
}

.position-description-container .bullet {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--priColor1);
    margin-top: 6px;
    margin-right: 5px;
}

.position-description {
    text-align: justify;
    flex-basis: fit-content;
}

.skill-category-container {
    display: flex;
    margin-bottom: 5px;
}

.skill-category {
    width: 120px;
    font-weight: 500;
}

.category-skills-container {
    display: flex;
    column-gap: 5px;
}

.skill {
    border-radius: 5px;
    padding: 3px 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.project-container {
    margin-bottom: 5px;
}

.project-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
}`