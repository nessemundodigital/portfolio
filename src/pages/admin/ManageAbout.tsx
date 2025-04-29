import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useToast } from '../../components/ui/Toaster';
import { Save, Upload, PlusCircle } from 'lucide-react';

export default function ManageAbout() {
  const [formData, setFormData] = useState({
    name: 'Alex Johnson',
    title: 'Graphic Designer & App Developer',
    shortBio: 'I create stunning visuals and powerful applications that captivate users and deliver exceptional results for businesses.',
    longBio: "I'm a graphic designer and app developer with over 8 years of experience creating digital solutions for clients around the world. My passion lies in creating visually stunning and functional designs that help businesses succeed.\n\nI specialize in brand identity, UI/UX design, mobile app development, and web applications. My approach combines creativity with technical expertise to deliver solutions that not only look beautiful but also perform exceptionally well.\n\nWhen I'm not designing or coding, you can find me exploring new design trends, experimenting with emerging technologies, or sharing my knowledge through blog posts and tutorials.",
    email: 'contact@alexdesign.com',
    phone: '+1 (555) 123-4567',
    location: '123 Design Street, Creative City, CD 12345',
  });
  
  const [skills, setSkills] = useState([
    { id: '1', name: 'UI/UX Design', category: 'design', percentage: 95 },
    { id: '2', name: 'Brand Identity', category: 'design', percentage: 90 },
    { id: '3', name: 'Illustration', category: 'design', percentage: 85 },
    { id: '4', name: 'Motion Graphics', category: 'design', percentage: 80 },
    { id: '5', name: 'React / React Native', category: 'development', percentage: 90 },
    { id: '6', name: 'HTML/CSS/JavaScript', category: 'development', percentage: 95 },
    { id: '7', name: 'Node.js', category: 'development', percentage: 85 },
    { id: '8', name: 'Swift / SwiftUI', category: 'development', percentage: 80 },
  ]);
  
  const [stats, setStats] = useState([
    { id: '1', name: 'Projects Completed', value: 120 },
    { id: '2', name: 'Happy Clients', value: 65 },
    { id: '3', name: 'Years Experience', value: 8 },
    { id: '4', name: 'Cups of Coffee', value: 1000 },
  ]);
  
  const [isLoading, setIsLoading] = useState(true);
  const { addToast } = useToast();
  
  useEffect(() => {
    document.title = 'Manage About Page - Admin - Alex Design';
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSkillChange = (id: string, field: string, value: string | number) => {
    setSkills(prev => prev.map(skill => 
      skill.id === id ? { ...skill, [field]: field === 'percentage' ? Number(value) : value } : skill
    ));
  };
  
  const handleStatChange = (id: string, field: string, value: string | number) => {
    setStats(prev => prev.map(stat => 
      stat.id === id ? { ...stat, [field]: field === 'value' ? Number(value) : value } : stat
    ));
  };
  
  const handleAddSkill = () => {
    const newId = String(Date.now());
    setSkills(prev => [...prev, { id: newId, name: '', category: 'design', percentage: 50 }]);
  };
  
  const handleAddStat = () => {
    const newId = String(Date.now());
    setStats(prev => [...prev, { id: newId, name: '', value: 0 }]);
  };
  
  const handleSave = () => {
    // Simulate saving data
    setTimeout(() => {
      addToast('About page updated successfully!', 'success');
    }, 1000);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Manage About Page</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Update your personal and professional information.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button icon={<Save size={18} />} onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="space-y-6">
            <div className="animate-pulse bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
              <div className="space-y-4">
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
            
            <div className="animate-pulse bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Personal Information</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Profile Photo
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="h-24 w-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Profile" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <Button variant="outline" icon={<Upload size={18} />}>
                      Change Photo
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Cover Image
                  </label>
                  <div className="h-24 rounded-md bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Cover" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <Button variant="outline" icon={<Upload size={18} />} className="mt-2">
                    Change Cover
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                />
                
                <Input
                  label="Professional Title"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                />
              </div>
              
              <div className="mb-6">
                <Input
                  label="Short Bio (Homepage)"
                  name="shortBio"
                  value={formData.shortBio}
                  onChange={handleFormChange}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Detailed Biography
                </label>
                <textarea
                  name="longBio"
                  value={formData.longBio}
                  onChange={handleFormChange}
                  rows={6}
                  className="w-full px-3 py-2 bg-background text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              
              <h3 className="font-bold text-lg mb-4">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  type="email"
                />
                
                <Input
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                />
                
                <Input
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            
            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Skills</h2>
                <Button 
                  variant="outline" 
                  size="sm" 
                  icon={<PlusCircle size={16} />}
                  onClick={handleAddSkill}
                >
                  Add Skill
                </Button>
              </div>
              
              <div className="space-y-6">
                <h3 className="font-bold text-lg mb-4">Design Skills</h3>
                
                {skills.filter(skill => skill.category === 'design').map(skill => (
                  <div key={skill.id} className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                      <div className="md:col-span-3">
                        <Input
                          label="Skill Name"
                          value={skill.name}
                          onChange={(e) => handleSkillChange(skill.id, 'name', e.target.value)}
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Proficiency (%)
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={skill.percentage}
                          onChange={(e) => handleSkillChange(skill.id, 'percentage', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="text-center">
                        <span className="text-lg font-bold">{skill.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <h3 className="font-bold text-lg mb-4">Development Skills</h3>
                
                {skills.filter(skill => skill.category === 'development').map(skill => (
                  <div key={skill.id} className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                      <div className="md:col-span-3">
                        <Input
                          label="Skill Name"
                          value={skill.name}
                          onChange={(e) => handleSkillChange(skill.id, 'name', e.target.value)}
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Proficiency (%)
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={skill.percentage}
                          onChange={(e) => handleSkillChange(skill.id, 'percentage', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="text-center">
                        <span className="text-lg font-bold">{skill.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Statistics</h2>
                <Button 
                  variant="outline" 
                  size="sm" 
                  icon={<PlusCircle size={16} />}
                  onClick={handleAddStat}
                >
                  Add Stat
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stats.map(stat => (
                  <div key={stat.id} className="flex items-end gap-4">
                    <div className="flex-grow">
                      <Input
                        label="Stat Title"
                        value={stat.name}
                        onChange={(e) => handleStatChange(stat.id, 'name', e.target.value)}
                      />
                    </div>
                    <div className="w-24">
                      <Input
                        label="Value"
                        type="number"
                        value={stat.value}
                        onChange={(e) => handleStatChange(stat.id, 'value', e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button icon={<Save size={18} />} onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}