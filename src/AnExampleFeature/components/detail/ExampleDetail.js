/**
 * You can view this example feature running at http://localhost:3000/exampleFeature.
 * Feel free to practise here, but don't commit your changes.
 */

/**
 * All design system / Chakra components should be imported from the design system, irrespective of whether
 * we have a custom one or not
 **/
import { Text, Button, Icon, Flex, Box, Divider } from '_shared/designSystem/components';
import { exampleFeatureService } from 'exampleFeature/services/exampleFeatureService';
import { useQuery } from 'react-query';

export default function ExampleDetail() {
  const matchId = 1691568;

  // Using react query here to fetch the data, using the service for the feature
  // exampleFeatureService_getMatch here is the id of the query, it should be globally unique
  const { isLoading, error, data } = useQuery(['exampleFeatureService_getMatch', matchId], () =>
    exampleFeatureService.getMatch({ matchId })
  );

  // React query makes it quite simple to handle things like errors and the loading state
  if (error) throw new Error(`Unable to retrieve data for match ${matchId}: ${error}`);

  if (isLoading) return null;

  return (
    /**
     * As shown below, the design system should suffice for whatever needs to be made. Avoid custom css
     * styling, at most the Chakra styling can be used.
     */

    // For things like padding, margin etc, use the Chakra shorthands like p (padding) rather than the full names */}
    <Box p="6">
      {/* Chakra has its own version of common things like Flex and Grid, which should be used. */}
      <Flex direction="column" gap={6}>
        {/* Headings are just Text with size / weight applied. This keeps it in line with Figma */}
        <Text fontSize="2xl" fontWeight="bold" color="grey.800">
          {/* Better to conditionally check if fields are present, to avoid errors trying to get fields from undefined */}
          {`${data?.players?.player1?.last_name} vs ${data?.players?.player2?.last_name}`}
        </Text>

        {/* Colours are taken from the design system colour palette which can be seen in storybook  */}
        <Text color="grey.500">{data?.players?.player1?.last_name}</Text>

        {/* Font sizes should only be those from the design system. See storybook for different sizes. If no
        size is given, md (medium) is used */}
        <Text fontSize="sm">{data?.players?.player1?.last_name}</Text>

        {/* You can set the type of button and size from the variants. See the Button storybook for variants */}
        <Box>
          <Button variant="outline" size="sm">
            View Match Details
          </Button>
        </Box>

        <Flex>
          <Text color="primary.500" mr={1}>
            Log out
          </Text>
          {/* Icon size should be adjusted using the Chakra height and width measurements rather than pixels  */}
          <Icon name="logOut" color="primary.500" height={5} width={5} />
        </Flex>

        {/* Show this horizontal rule only on mobile. See https://chakra-ui.com/docs/features/responsive-styles
        for more details  */}
        <Divider display={{ base: 'flex', md: 'none' }} />
      </Flex>
    </Box>
  );
}
