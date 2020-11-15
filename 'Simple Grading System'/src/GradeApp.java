//name: Christopher Bradford
//Id: 1820
//Abstract: Main page
//Date: 4/20
import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.SwingUtilities;
import javax.swing.JPanel;
import javax.swing.AbstractButton;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;

public class GradeApp extends JFrame implements ActionListener{
	public static int width = 400;
	public static int height = 300;
	
	Enter_Data q = null;
	
	public GradeApp() {
		super("Menu");
		setSize(width,height);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setTitle("Grade App");
		
		JMenu helpPart = new JMenu("Help");
		
		JMenuItem helper = new JMenuItem("Help");
		helper.addActionListener(this);
		helpPart.add(helper);
		
		JMenuBar top = new JMenuBar();
		top.add(helpPart);
		setJMenuBar(top);
		
		JPanel buttonPanel = new JPanel();
		buttonPanel.setLayout(new FlowLayout());
		
		JButton addData = new JButton("Insert Data");
		addData.addActionListener(this);
		
		JButton reportData = new JButton("Report");
		reportData.addActionListener(this);
		
		JButton Exit = new JButton("Exit");
		Exit.addActionListener(this);
		
		buttonPanel.add(addData);
		buttonPanel.add(reportData);
		buttonPanel.add(Exit);
		
		add(buttonPanel,BorderLayout.CENTER);
	}

	public void actionPerformed(ActionEvent e) {
		String sButton = e.getActionCommand();
		
		if(sButton.equals("Help")) {
			JOptionPane.showMessageDialog(null,"Christopher Bradford \nversion 1.0");
		}
		if(sButton.equals("Insert Data")) {
			if(q == null)
			q = new Enter_Data();
			
			else {
			q.setVisible(true);
			}
		}
		if(sButton.equals("Report")) {
			if(q == null || (q.names.size() <= 0 || q.ids.size() <= 0)) {
				JOptionPane.showMessageDialog(null,"There are no students.");
			}
			else {
				new Report_Data(q.names,q.ids,q.grade1Scores,q.grade2Scores);
			}
		}
		if(sButton.equals("Exit")) {
			dispose();
		}
	}

	public static void main(String[] args) {
        GradeApp app = new GradeApp();
        app.setVisible(true);
	}

}
