import React from "react";

import humanize from "humanize-string";

const MAX_STRING_LENGTH = 150;

export const formatEnum = (values: string | string[] | null | undefined) => {
  let output = "";

  if (Array.isArray(values)) {
    const humanizedValues = values.map((value) => humanize(value));
    output = humanizedValues.join(", ");
  } else if (typeof values === "string") {
    output = humanize(values);
  }

  return output;
};

export const jsonDisplay = (obj: object) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

export const truncate = (text?: string | number, length = 100): string => {
  if (text == null) return "";
  const str = String(text);
  return str.length > length ? str.substring(0, length) + "..." : str;
};

export const jsonTruncate = (obj: unknown) => {
  return truncate(JSON.stringify(obj, null, 2));
};

export const timeTag = (datetime?: string | Date) => {
  if (!datetime) return "";

  const iso = typeof datetime === "string" ? datetime : datetime.toISOString();

  const date = new Date(iso);
  if (isNaN(date.getTime())) return "";

  return (
    <time dateTime={iso} title={iso}>
      {date.toUTCString()}
    </time>
  );
};

export const checkboxInputTag = (checked: boolean) => {
  return <input type="checkbox" checked={checked} disabled />;
};
