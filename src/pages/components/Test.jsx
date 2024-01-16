import Table from '../../components/hyun-design-system/table/Table';
import Header from '../../components/hyun-design-system/table/Header';
const Test = () => {
  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <Header colSpan={3}>asd</Header>
            <Header>asd</Header>
            <Header>asd</Header>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>asd</td>
            <td>asd</td>
            <td>asd</td>
            <td>asd</td>
            <td>asd</td>
          </tr>
        </tbody>
      </Table>
      <table className="table">
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>
              1
              <br />1
            </td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>

      <br />

      <table className="table">
        <tbody>
          <tr>
            <th>1</th>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <th>1</th>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <th>
              1
              <br />1
            </th>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Test;
