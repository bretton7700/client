import { useList } from '@pankod/refine-core';
import { Typography, Box } from '@pankod/refine-mui';

import { AgentCard } from 'components';

const Agents = () => {
  const { data, isLoading, isError } = useList({
    resource:'users'
  })

  const allAgents = data?.data ?? [];
  if(isLoading) return <div>loading....</div>
  if(isError) return <div>error...</div>

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">Agents List </Typography>
    </Box>
  )
}

export default Agents