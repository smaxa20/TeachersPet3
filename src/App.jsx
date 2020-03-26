import React from 'react';
import './App.css';
import * as Styled from './styled';

function App() {
  return (
    <Styled.Page>
		<Styled.Header />
		<Styled.Body>
			<Styled.ClassList>
				<Styled.SectionHeader>My Classes</Styled.SectionHeader>
				<Styled.ClassButton>First Period</Styled.ClassButton>
				<Styled.ClassButton active>Second Period</Styled.ClassButton>
				<Styled.ClassButton>Third Period</Styled.ClassButton>
				<Styled.ClassButton>Fifth Period</Styled.ClassButton>
				<Styled.ClassButton>Sixth Period</Styled.ClassButton>
				<Styled.ClassButton>Homeroom</Styled.ClassButton>
				<Styled.ClassButton>Study Hall</Styled.ClassButton>
				<Styled.ClassButton>Add Class</Styled.ClassButton>
			</Styled.ClassList>
			<Styled.Options>
				<Styled.Section>
					<Styled.SectionHeader>Randomize</Styled.SectionHeader>
					<Styled.Subsection>
						<Styled.FuncButton>Student</Styled.FuncButton>
						<Styled.FuncButton>Pairs</Styled.FuncButton>
						<Styled.FuncButton>Groups</Styled.FuncButton>
						<Styled.FuncButton>Rows</Styled.FuncButton>
					</Styled.Subsection>
					<Styled.Output>
						<Styled.OutputLine>Ji and Haylie</Styled.OutputLine>
						<Styled.OutputLine>Elisha and Pete</Styled.OutputLine>
						<Styled.OutputLine>James and Paige</Styled.OutputLine>
						<Styled.OutputLine>Parker and Bao</Styled.OutputLine>
						<Styled.OutputLine>Brad and John</Styled.OutputLine>
						<Styled.OutputLine>Tanner and Hunter</Styled.OutputLine>
						<Styled.OutputLine>Andrew and Alex</Styled.OutputLine>
						<Styled.OutputLine>Kristen and Thomas</Styled.OutputLine>
						<Styled.OutputLine>Daniel and Jessica</Styled.OutputLine>
						<Styled.OutputLine>Gideon and Baker</Styled.OutputLine>
						<Styled.OutputLine>Anne and Theo</Styled.OutputLine>
						<Styled.OutputLine>Stuart and Kris</Styled.OutputLine>
						<Styled.OutputLine>Luke and Cooper</Styled.OutputLine>
						<Styled.OutputLine>Scarlet and Teri</Styled.OutputLine>
						<Styled.OutputLine>Becky and Michael</Styled.OutputLine>
						<Styled.OutputLine>Kathleen and Scott</Styled.OutputLine>
						<Styled.OutputLine>Marissa and Cyrus</Styled.OutputLine>
						<Styled.OutputLine>Penelope and Megan</Styled.OutputLine>
						<Styled.OutputLine>Karlie and Taylor</Styled.OutputLine>
						<Styled.OutputLine>Drew and Chad</Styled.OutputLine>
					</Styled.Output>
				</Styled.Section>
				<Styled.Section>
					<Styled.SectionHeader>Students</Styled.SectionHeader>
					<Styled.Subsection>
						<Styled.FuncButton>Students</Styled.FuncButton>
					</Styled.Subsection>
				</Styled.Section>
			</Styled.Options>
		</Styled.Body>
    </Styled.Page>
  );
}

export default App;
