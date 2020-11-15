//name: Christopher Bradford
//Id: 1820
//Abstract: Report Data page
//Date: 4/20
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class Report_Data extends JFrame{
	int width = 1300;
	int height = 900;
	JLabel people;
	public Report_Data(ArrayList<String> names, ArrayList<String> ids, ArrayList<String> grades1, ArrayList<String> grades2) {
		super("Report Data");
		setSize(width,height);
		setLayout(new GridLayout(5,1));
		
		
		JPanel namePanel = new JPanel();
		
		float sumup = 0;
		for(int i = 0; i < grades1.size(); i++) {
			sumup += Float.parseFloat(grades1.get(i)) + Float.parseFloat(grades2.get(i));
		}
		sumup /= grades1.size() + grades2.size();
		
		for(int i = 0; i < names.size(); i++) {
			people = new JLabel("<html>" + "Name: " + names.get(i) + "<br>" + "ID: " + ids.get(i) + "<br>" + "<html>");
			namePanel.add(people);
		}
		
		JPanel statPanel = new JPanel();
		JLabel stats = new JLabel("Class Average: " + sumup + "\n  Number of students: " + names.size());
		statPanel.add(stats);
		
		add(namePanel,BorderLayout.CENTER);
		add(statPanel,BorderLayout.CENTER);
		pack();
		setVisible(true);
	}
}
