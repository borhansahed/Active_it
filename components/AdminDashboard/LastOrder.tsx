import { Table } from "@nextui-org/react";


const LastOrder = () => {
    return (
        <div className="mt-10 ml-10">
            <h1 className="text-xl mb-5">Last Orders</h1>
          <Table
      
      css={{
        
        background:'$gray400',
        height:"auto",
        minWidth: "100%",
      
      }}
    //   selectionMode="single"
    >
      <Table.Header  >
        <Table.Column>NAME</Table.Column>
        <Table.Column>SERVICE</Table.Column>
        <Table.Column>ORDER/STATUS</Table.Column>
        
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Tony Reichert</Table.Cell>
          <Table.Cell>CEO</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Zoey Lang</Table.Cell>
          <Table.Cell>Technical Lead</Table.Cell>
          <Table.Cell> <button className="text-red-500">Processing</button></Table.Cell>
       
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Jane Fisher</Table.Cell>
          <Table.Cell>Senior Developer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
         
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>William Howard</Table.Cell>
          <Table.Cell>Community Manager</Table.Cell>
          <Table.Cell> <button  className="text-green-500">Shifted</button> </Table.Cell>
          
        </Table.Row>
        
      </Table.Body>
    </Table>
        </div>
    );
};

export default LastOrder;