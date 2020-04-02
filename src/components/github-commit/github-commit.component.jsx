import React, { useState, useEffect } from 'react';

import './github-commit.styles.scss';

const GithubCommit = () => {
  const [page, setPage] = useState(1);
  const [commitHistory, setCommitHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMoreCommit = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(`https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/vnd.github.cloak-preview'
      })
    })
      .then(res => res.json())
      .then(response => {
        setCommitHistory(response.items);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [page]);

  return (
    <div>
      <h1>API calls with React Hooks</h1>
      {isLoading && <p>Wait I'm loading comments for you</p>}
      {commitHistory.length !== 0 && <button onClick={loadMoreCommit}>Load More Commits</button>}
      {commitHistory.map((c, idx) => (
        <div key={idx}>
          {c.commit && (
            <>
              <div>
                <h2 style={{ textDecoration: 'Underline' }}>{c.commit.committer.name}</h2>
                <p>{c.commit.message}</p>
              </div>
              <hr />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default GithubCommit;