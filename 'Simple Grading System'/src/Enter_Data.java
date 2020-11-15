//name: Christopher Bradford
//Id: 1820
//Abstract: Enter Data page
//Date: 4/20
import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class Enter_Data extends JFrame implements ActionListener{
	ArrayList<String> names = new ArrayList<String>();
	ArrayList<String> ids = new ArrayList<String>();
	ArrayList<String> grade1Scores = new ArrayList<String>();
	ArrayList<String> grade2Scores = new ArrayList<String>();
	
	int width = 400;
	int height = 700;
	
	private JTextField name;
	private JTextField id;
	private JTextField grade1;
	private JTextField grade2;
	
	public Enter_Data() {
		super("Enter Data");
		setSize(width,height);
		setLayout(new GridLayout(5,1));
		
		JPanel namePanel = new JPanel();
		namePanel.setLayout(new BorderLayout());
		
		name = new JTextField(30);
		
		namePanel.add(name,BorderLayout.SOUTH);
		JLabel nameCommand = new JLabel("Enter name here:");
		namePanel.add(nameCommand, BorderLayout.CENTER);
		
		JPanel idPanel = new JPanel();
		idPanel.setLayout(new BorderLayout());
		
		id = new JTextField(30);
		
		idPanel.add(id,BorderLayout.SOUTH);
		JLabel idCommand = new JLabel("Enter ID here:");
		idPanel.add(idCommand,BorderLayout.CENTER);
		
		
		JPanel gradeOnePanel = new JPanel();
		gradeOnePanel.setLayout(new BorderLayout());
		
		grade1 = new JTextField(30);
		
		gradeOnePanel.add(grade1,BorderLayout.SOUTH);
		JLabel gradeOneCommand = new JLabel("Enter their exam one score here in percent: ");
		gradeOnePanel.add(gradeOneCommand,BorderLayout.CENTER);
		
		
		JPanel gradeTwoPanel = new JPanel();
		gradeTwoPanel.setLayout(new BorderLayout());
		
		grade2 = new JTextField(30);
		
		gradeTwoPanel.add(grade2,BorderLayout.SOUTH);
		JLabel gradeTwoCommand = new JLabel("Enter their exam two score here in percent: ");
		gradeTwoPanel.add(gradeTwoCommand,BorderLayout.CENTER);
		
		JPanel buttonPanel = new JPanel();
		buttonPanel.setLayout(new FlowLayout());
		JButton actionButton = new JButton("Submit");
		actionButton.addActionListener(this);
		buttonPanel.add(actionButton);
		
		JButton clearButton = new JButton("Clear");
		clearButton.addActionListener(this);
		buttonPanel.add(clearButton);
		
		add(namePanel);
		add(idPanel);
		add(gradeOnePanel);
		add(gradeTwoPanel);
		add(buttonPanel);
		
		pack();
		setVisible(true);
	}
	
	public void actionPerformed(ActionEvent e) {
		String action = e.getActionCommand();
		if(action.equals("Submit")) {
			boolean tick = true;
			
			if(name.getText().isEmpty() && grade1.getText().isEmpty() && grade2.getText().isEmpty() ) {
				tick = false;
			}
			
			if(tick == true) {
			names.add(name.getText());
			ids.add(id.getText());
			grade1Scores.add(grade1.getText());
			grade2Scores.add(grade2.getText());

			float average = (Float.parseFloat(grade1.getText()) + Float.parseFloat(grade2.getText())) / 2;
			String Fillin = ("id: " + id.getText() + "\nname: " + name.getText() + "\nAverage of Scores: " + average);
			JOptionPane.showMessageDialog(null,Fillin);
			}
			
			if(tick == false) {
				if(ids.contains(id.getText()) == true){
					float average = (Float.parseFloat(grade1.getText()) + Float.parseFloat(grade2.getText())) / 2;
					int index = ids.indexOf(id.getText());
					String Fillin = ("Name: " + names.get(index) + "\nAverage: " + average +  "\nExam 1: " + grade1Scores.get(index) + "\nExam 2: " + grade2Scores.get(index + 1));
					JOptionPane.showMessageDialog(null,Fillin);
				}
				if(ids.contains(id.getText()) == false) {
					JOptionPane.showMessageDialog(null,"This ID does not exist in this instance");
				}
			}
			
		}
		else if(action.equals("Clear")) {
			name.setText("");
			id.setText("");
			grade1.setText("");
			grade2.setText("");
		}
		else
			name.setText("Unexpected error.");
	}
}
