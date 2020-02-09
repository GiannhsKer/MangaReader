import * as React from 'react';
import { List } from 'react-native-paper';

class MyComponent extends React.Component {
    state = {
        firstQuery: '',
    };
  
    render() {
        const { firstQuery } = this.state;
        return (
            <React.Fragment>
                <Searchbar
                        placeholder="Search"
                        onChangeText={query => { this.setState({ firstQuery: query }); }}
                        value={firstQuery}
                    
                <List.Section>
                <List.Subheader>Manga Reader</List.Subheader>
                    <List.Item
                        title="First Item"
                        left={() => <List.Icon icon="folder" />}
                    />
                    <List.Item
                        title="Second Item"
                        left={() => <List.Icon color="#000" icon="folder" />}
                    />
                </List.Section>
            </React.Fragment>
            
        );
    }
}
class MyComponent1 extends React.Component{
            
}

export default MyComponent;
