export const css = `
.app-child {
  padding: 60px;
  font-size: 14px;
}

.mb-1 {
    margin-bottom: 5px;
}
.header {
    text-align: left;
}

.header .name {
    font-size: 32px;
    text-transform: uppercase;
}

.header .title  {
    color: var(--priColor2);
    font-size: 20px;
    margin-top: 0px;
    font-weight: 500;
}

.contact {
    margin-top: 10px;
    display: flex;
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
    margin-top: 35px;
    margin-bottom: 10px;
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

.description {
    margin-top: 15px;
}

`