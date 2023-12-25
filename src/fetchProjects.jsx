import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "nepl99p3hpfl",
  environment: "master",
  accessToken: "j0XuWHYnLTEmsEa1UAZFhIILUXjHuXq8JUgHzK5QeU0",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      //   console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
