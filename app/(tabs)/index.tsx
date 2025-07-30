import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

export default function Index() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          titleVariant="titleLarge"
        />
        <Card.Content>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            tenetur odit eveniet inventore magnam officia quia nemo porro?
            Dolore sapiente quos illo distinctio nisi incidunt? Eaque officiis
            iusto exercitationem natus?
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button>Open</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});
