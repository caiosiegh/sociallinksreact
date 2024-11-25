function Link({ title, site }) {
  return (
    <a href={site} target="_blank">
      {title}
    </a>
  );
}

export default Link;
