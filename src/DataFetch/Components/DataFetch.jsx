import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { DataFetchService } from '../services/DataFetchService';

export const DataFetch = () => {
  const [inputNumber, setInputNumber] = useState("");
  const [competition, setCompetition] = useState("");

  const { data: filesFound, isFetching: filesFetching } = useQuery(
    ['fixtures_files_aws_videos', [competition]],
    () => DataFetchService.fetchFoundAWSFiles(competition)
  );

  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
  };

  const handleSave = () => {
    event.preventDefault()
    setCompetition(inputNumber);
  };

  console.log(filesFound)
  return (
    <div>
      <div>
        <p>Good examples 1011_202201 and 271657</p>
      </div>
    <input type="text" value={inputNumber} onChange={handleInputChange} />
    <button onClick={handleSave}>Save</button>
    <p>The chosen Id is: {competition}</p>
    <div>{filesFound?.map((file) => <p key={file.matchId}>{file.urlBase}</p>) }</div>
  </div>
  )
}
