import { ReactNode } from "react";
import { css, cx } from "../../styled-system/css";
import "./markdown.css";

export function Markdown({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "markdown",
        css({
          "& img": {
            padding: 10,
          },
          "& button": {
            color: "link",
            paddingX: 3,
            borderStyle: "solid",
            borderWidth: 1,
          },
          "& h1": {
            fontSize: "2em",
            my: "0.67em",
            fontWeight: "bold",
          },
          "& h2": {
            fontSize: "1.5em",
            my: "0.83em",
            fontWeight: "bold",
          },
          "& h3": {
            fontSize: "1.17em",
            my: "1em",
            fontWeight: "bold",
          },
          "& h4": {
            /* fontSize: "1em", */
            my: "1.33em",
            fontWeight: "bold",
          },
          "& h5": {
            fontSize: "0.83em",
            my: "1.67em",
            fontWeight: "bold",
          },
          "& h6": {
            fontSize: "0.67em",
            my: "0.5em",
            fontWeight: "bold",
          },
          "& p": {
            my: "1em",
          },
          "& small": {
            fontSize: "80%",
          },
          "& sup": {
            position: "relative",
            top: "-0.5em",
            fontSize: "80%",
          },
          "& sub": {
            position: "relative",
            top: "-0.5em",
            fontSize: "80%",
          },
          "& blockquote": {
            mx: 40,
            fontSize: "90%",
          },
          "& li > p": {
            my: 0,
          },
          "& ul, ol": {
            mx: 0,
            pl: 40,
          },
          "& ul": {
            listStyleType: "disc",
          },
          "& ol": {
            listStyleType: "decimal",
          },
          "& dl": {
            my: 1,
          },
          "& hr": {
            my: "0.5em",
            mx: "auto",
            borderStyle: "inset",
            borderWidth: "1px",
          },
          "& mark": {
            backgroundColor: "active",
          },
          "& table": {
            borderColor: "text",
            borderCollapse: "collapse",
          },
          "& thead": {
            textAlign: "center",
          },
          "& table, th, td": {
            borderStyle: "solid",
            borderWidth: 1,
          },
          "& th, td": {
            p: 2,
          },
          "& svg": {
            backgroundColor: "svg",
            borderRadius: 5,
          },
        })
      )}
    >
      {children}
    </div>
  );
}
