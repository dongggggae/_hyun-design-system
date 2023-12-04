import { Table, TableRow, TableHeader, TableData, TableBody, TableHead } from '../../components/hyun-design-system/table';

const ComponentPage = () => {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableHeader>asdsad</TableHeader>
            <TableData>asdasd</TableData>
            <TableData>asdasd</TableData>
            <TableData>asdasd</TableData>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <br />
      <br />
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>asdsad</TableHeader>
            <TableHeader>asdsad</TableHeader>
            <TableHeader>asdsad</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableData>asdsad</TableData>
            <TableData>asdsad</TableData>
            <TableData>asdsad</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ComponentPage;
